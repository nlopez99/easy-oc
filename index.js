const { getOCPPods, logIntoOCP, portForwardPod } = require('./ocp')
const prompt = require('prompt-sync')();

const args = process.argv;
const command = args[2];

const run = async () => {
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

