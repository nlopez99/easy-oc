import { runCommand, runCommandNoOutput } from './command';
import { PodSchema } from './types/PodSchema';
import { ProjectsSchema } from './types/ProjectsSchema';
import { readdir } from 'fs/promises';
import inquirer = require('inquirer');
import readlineSync = require('readline-sync');

export const logIntoOCP = async (): Promise<void> => {
    const username: string = readlineSync.question('OCP Username: ');
    const password: string = readlineSync.question('OCP Password: ', {
        hideEchoBack: true
    });
    console.clear();

    console.log('Logging into OCP...');
    const loginArgs = ['login', '-u', username, '-p', password];
    await runCommand('oc', loginArgs);
    console.clear();
};

export const getOCPPods = async (): Promise<string[]> => {
    const getPodArgs: string[] = ['get', 'pods', '-o', 'json'];
    const getPodsOutput: string | void = await runCommand('oc', getPodArgs);
    let podsJSON: PodSchema = JSON.parse(getPodsOutput);
    let podNames: string[] = podsJSON.items
        .map((pod) => pod.metadata.name)
        .filter((pod) => !pod.includes('deploy') && !pod.includes('build'));
    return podNames;
};

export const getOCPProjects = async (): Promise<string[]> => {
    const getProjectsArgs: string[] = ['get', 'projects', '-o', 'json'];
    const getProjectsOutput: string = await runCommand('oc', getProjectsArgs);
    let projectsJSON: ProjectsSchema = JSON.parse(getProjectsOutput);
    let projectNames: string[] = projectsJSON.items.map((project) => project.metadata.name);
    return projectNames;
};

export const switchOCPProjects = async (projectName: string): Promise<void> => {
    const switchProjectsArgs: string[] = ['project', projectName];
    await runCommand('oc', switchProjectsArgs);
};

export const portForwardPod = async (podName: string, localPort: number, remotePort: number): Promise<void> => {
    const portForwardArgs = ['port-forward', podName, `${localPort}:${remotePort}`];
    console.log(`Port Forwarding to ${podName}......`);
    await runCommand('oc', portForwardArgs);
};

export const restorePostgresDatabase = async (podName: string, databaseName: string): Promise<void> => {
    const files: string[] = await readdir('.');
    let possibleDumpFiles = files.filter(
        (file) => file.includes('.sql') || file.includes('.bak') || file.includes('.dump')
    );
    if (!possibleDumpFiles.length) {
        console.error("No dump files in directory ending with '.sql', '.bak', or '.dump'.");
        return;
    }
    let chosenDumpFile: inquirer.Answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'fileName',
            message: 'Please select a backup SQL file:',
            choices: possibleDumpFiles
        }
    ]);
    let dumpFile: string = chosenDumpFile.fileName;
    const copyFileArgs = ['cp', `${dumpFile}`, `${podName}:/tmp/${dumpFile}`];
    await runCommand('oc', copyFileArgs);

    const restoreArgs = ['exec', podName, '--', 'bash', '-c', `psql ${databaseName} < /tmp/${dumpFile}`];
    const exitCode = await runCommandNoOutput('oc', restoreArgs);
    if (exitCode === 0) console.log('Database Successfully Restored.');
    else console.log('Database could not be restored.');
};

export const checkDatabaseIsEmpty = async (podName: string, databaseName: string): Promise<boolean> => {
    const databaseQuery =
        "select count(*) from pg_class c join pg_namespace s on s.oid = c.relnamespace where s.nspname not in ('pg_catalog', 'information_schema') and s.nspname not like 'pg_temp%';";
    // On the postgresql versions <9.x, 76 is the default number of minimum tables in an empty database
    const minNumberOfTables = 76;
    const databaseCheckArgs = ['exec', podName, '--', 'bash', '-c', `psql ${databaseName} -c "${databaseQuery}"`];
    const output = await runCommand('oc', databaseCheckArgs);
    const splitOutput = output.split('\n');
    let tableCount = parseInt(splitOutput[2].trim());
    if (tableCount > minNumberOfTables) {
        return false;
    }
    return true;
};

export const isUserLoggedIn = async (): Promise<boolean> => {
    const isLoggedInArgs = ['whoami'];
    let exitCode = await runCommandNoOutput('oc', isLoggedInArgs);
    if (exitCode === 0) return true;
    else return false;
};

export const selectProject = async (): Promise<void> => {
    let ocpProjects: string[] = await getOCPProjects();
    let chosenProject: inquirer.Answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'projectName',
            message: 'Please select a project:',
            choices: ocpProjects
        }
    ]);

    let projectName: string = chosenProject.projectName;
    await switchOCPProjects(projectName);
};

export const selectPod = async (): Promise<string> => {
    let ocpPods: string[] = await getOCPPods();
    let chosenPod: inquirer.Answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'podName',
            message: 'Please select a pod:',
            choices: ocpPods
        }
    ]);
    let podName: string = chosenPod.podName;
    return podName;
};
