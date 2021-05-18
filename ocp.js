const { runCommand } = require("./command")
const path = require('path');

const logIntoOCP = async (username, password) => {

    const loginArgs = ['login', '-u', username, '-p', password];
    await runCommand("oc", loginArgs);
}

const getOCPPods = async () => {
    const getPodArgs = ["get", "pods", "-o", "json"];
    const getPodsOutput = await runCommand('oc', getPodArgs);
    let podsJSON = JSON.parse(getPodsOutput);
    let podNames = podsJSON.items.map(pod => pod.metadata.name).filter((pod) => !pod.includes('deploy') && !pod.includes('build'));
    return podNames;
}

const portForwardPod = async (podName, localPort, remotePort) => {
    const portForwardArgs = ["port-forward", podName, `${localPort}:${remotePort}`]
    console.log(`Port Fowarding to ${podName}...`)
    await runCommand("oc", portForwardArgs);
}

const restorePostgresDatabase = async (podName, backupFilePath, databaseName) => {

    backupFileName = path.basename(backupFilePath)
    const copyFileArgs = ["cp", `${podName}:/tmp/${backupFileName}`, `${backupFilePath}`]
    await runCommand('oc', copyFileArgs)

    const restoreArgs = ["exec", podName, "--", "bash", "-c", `"psql ${databaseName}" < /tmp/${backupFileName}`]
    await runCommand('oc', restoreArgs)
}


module.exports = {
    logIntoOCP,
    getOCPPods,
    portForwardPod,
    restorePostgresDatabase
}