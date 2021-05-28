import inquirer = require('inquirer');
import {
    getOCPPods,
    getOCPProjects,
    switchOCPProjects,
    logIntoOCP,
    portForwardPod,
    isUserLoggedIn,
    restorePostgresDatabase
} from './ocp';

const args: string[] = process.argv;
const command: string = args[2];
// status of project pods

const run = async () => {
    try {
        let loggedIn = await isUserLoggedIn();
        if (!loggedIn) {
            await logIntoOCP();
        }

        let ocpProjects: string[] = await getOCPProjects();
        let chosenProject: inquirer.Answers = await inquirer.prompt([{
        	type: "list",
        	name: "projectName",
        	message: "Please select a project:",
        	choices: ocpProjects,
        }])

        let projectName: string = chosenProject.projectName;
        await switchOCPProjects(projectName);

        let ocpPods: string[] = await getOCPPods();
        let chosenPod: inquirer.Answers = await inquirer.prompt([{
        	type: "list",
        	name: "podName",
        	message: "Please select a pod:",
        	choices: ocpPods,
        }])
        let podName: string = chosenPod.podName;

        // await portForwardPod(podName, 55432, 5432);
        await restorePostgresDatabase(podName, 'esofdb');
    } catch (err) {
        console.log('Handling: ', err);
    }
};
run();
