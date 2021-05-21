import inquirer = require('inquirer');
import { getOCPPods, getOCPProjects, switchOCPProjects, logIntoOCP, portForwardPod } from './ocp'
const prompt = require("prompt-sync")();


const args: string[] = process.argv;
const command: string = args[2];

const run = async () => {
	try {
		const username: string = prompt('OCP Username: ');
		const password: string = prompt('OCP Password: ');
		console.clear();

		console.log("Logging into OCP...")
		await logIntoOCP(username, password);
		console.clear();

		const ocpProjects: string[] = await getOCPProjects();
		const project: inquirer.Answers = await inquirer.prompt([{
			type: "list",
			name: "ocpProject",
			message: "Please select a project:",
			choices: ocpProjects,
		}])

		const projectName: string = project.ocpProject;
		await switchOCPProjects(projectName);


		const ocpPods: string[] = await getOCPPods();


		// await portForwardPod("string", 55432, 5432);
		// console.log(ocpPods)

	} catch (err) {
		console.log('Handling: ', err);
	}
}
run();

