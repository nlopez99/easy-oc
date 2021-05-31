#!/usr/bin/env node

import readlineSync = require('readline-sync');
import {
    selectProject,
    selectPod,
    logIntoOCP,
    portForwardPod,
    isUserLoggedIn,
    restorePostgresDatabase,
    checkDatabaseIsEmpty
} from './ocp';

const args: string[] = process.argv;
const command: string = args[2];

const run = async (command: string) => {
    let loggedIn: boolean = await isUserLoggedIn();
    if (!loggedIn) {
        await logIntoOCP();
    }
    await selectProject();

    switch (command) {
        case 'restoredb':
            try {
                let podName: string = await selectPod();
                const databaseName: string = readlineSync.question('Database name: ');
                const isDatabaseEmpty: boolean = await checkDatabaseIsEmpty(podName, databaseName);
                if (isDatabaseEmpty) {
                    console.log('Database is empty, restoring now...');
                    await restorePostgresDatabase(podName, databaseName);
                    break;
                } else {
                    console.log('Database is not empty, aborting restore.');
                    break;
                }
            } catch (err) {
                console.log('Handling: ', err);
            }
        case 'pf':
            let podName: string = await selectPod();
            const localPort: number = parseInt(readlineSync.question('Local Port: '));
            const remotePort: number = parseInt(readlineSync.question('Remote Port: '));
            await portForwardPod(podName, localPort, remotePort);
    }
};

run(command);
