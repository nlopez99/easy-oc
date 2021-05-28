import { spawn } from 'child_process';

export const runCommand = (command: string, args: string[]): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const commandRunning = spawn(command, args);
        let stdoutFeed: string = '';
        commandRunning.stdout.on('data', (data: Buffer) => {
            stdoutFeed += data.toString();
        });
        commandRunning.on('error', (data: Buffer) => {
            reject(data.toString());
        });
        commandRunning.on('exit', (exitCode: number) => {
            if (exitCode === 0) resolve(stdoutFeed);
            else console.log(exitCode);
        });
    });
};

export const runCommandNoOutput = (command: string, args: string[]): Promise<number> => {
    return new Promise<number>((resolve) => {
        const commandRunning = spawn(command, args);
        commandRunning.on('exit', (exitCode: number) => {
            resolve(exitCode);
        });
    });
};
