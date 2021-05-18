const { getOCPPods, logIntoOCP, portForwardPod } = require('./ocp')
const prompt = require('prompt-sync')();

const args = process.argv;
const command = args[2];

if (args.includes('--only-secrets') || args.includes('--os')) {
    logInfo('Running Secret Generation...');
    deploySecrets()
      .then((res) => closeTool(0))
      .catch((err) => {
        console.log(err);
        closeTool(1);
      });
  }
  


async function run() {
    try {
        const username = prompt('OCP Username: ');
        const password = prompt('OCP Password: ');
        console.clear();

        await logIntoOCP(username, password);
        console.clear();

        const ocpPods = await getOCPPods();
        await portForwardPod(databasePod, 55432, 5432);
        console.log(ocpPods)

    } catch (err) {
        console.log('Handling: ', err);
    }
}
run();

