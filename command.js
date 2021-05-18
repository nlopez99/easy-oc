const { spawn } = require('child_process');


const runCommand = (command, args) => {
    return new Promise((resolve, reject) => {
        const commandRunning = spawn(command, args);
        let stdoutFeed = '';
        commandRunning.stdout.on('data', (data) => {
            stdoutFeed += data.toString();
        });
        commandRunning.on('error', (data) => {
            console.log(data.toString());

        });
        commandRunning.on('exit', (exitCode) => {
            if (exitCode === 0) {
                resolve(stdoutFeed)
            }
            else {
                reject(exitCode)
            }
        });
    });
};

module.exports = {
    runCommand
}