import { runCommand } from "./command";
import { PodSchema } from "./types/PodSchema";
import { ProjectsSchema } from "./types/ProjectsSchema";
const path = require('path');


export const logIntoOCP = async (username: string, password: string): Promise<void> => {

    const loginArgs = ['login', '-u', username, '-p', password];
    await runCommand("oc", loginArgs);
}

export const getOCPPods = async (): Promise<string[]> => {
    const getPodArgs: string[] = ["get", "pods", "-o", "json"];
    const getPodsOutput: string = await runCommand('oc', getPodArgs);
    let podsJSON: PodSchema = JSON.parse(getPodsOutput);
    let podNames: string[] = podsJSON.items.map(pod => pod.metadata.name).filter((pod) => !pod.includes('deploy') && !pod.includes('build'));
    return podNames;
}

export const getOCPProjects = async (): Promise<string[]> => {
    const getProjectsArgs: string[] = ["get", "projects", "-o", "json"];
    const getProjectsOutput: string = await runCommand('oc', getProjectsArgs);
    let projectsJSON: ProjectsSchema = JSON.parse(getProjectsOutput);
    let projectNames: string[] = projectsJSON.items.map(project => project.metadata.name);
    return projectNames;
}

export const switchOCPProjects = async (projectName: string): Promise<void> => {
    const switchProjectsArgs: string[] = ["project", projectName];
    await runCommand('oc', switchProjectsArgs);
}

export const portForwardPod = async (podName: string, localPort: number, remotePort: number): Promise<void> => {
    const portForwardArgs = ["port-forward", podName, `${localPort}:${remotePort}`]
    console.log(`Port Fowarding to ${podName}...`)
    await runCommand("oc", portForwardArgs);
}

export const restorePostgresDatabase = async (podName: string, backupFilePath: string, databaseName: string): Promise<void> => {

    const backupFileName = path.basename(backupFilePath);
    const copyFileArgs = ["cp", `${podName}:/tmp/${backupFileName}`, `${backupFilePath}`];
    await runCommand('oc', copyFileArgs);

    const restoreArgs = ["exec", podName, "--", "bash", "-c", `"psql ${databaseName}" < /tmp/${backupFileName}`];
    await runCommand('oc', restoreArgs);
}