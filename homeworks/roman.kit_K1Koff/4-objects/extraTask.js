const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const characters = ['Your characters:'];

const baseObject = {
    name: null,
    strenght: null,
    satiety: null,
    happiness: null,
    intelligence: null,
    favouriteFood: null,
    favouriteActivity: null,
};

function exit() {
    console.clear();
    console.log(characters);
    rl.close();
}

function menu(command, runAppCallback) {
    switch (command) {
        case 'y': runAppCallback();
            break;
        case 'n': exit();
            break;
        case 'sh': console.clear();
            console.log(characters);
            setTimeout(async () => { await runAppCallback(); }, 5 * 1000);
            break;
        default: runAppCallback();
    }
}

function inputNumber(question, dataStack) {
    return new Promise((resolve) => {
        rl.question(`${question} (from 1 to 10): `, (answer) => {
            if (+answer > 0 && +answer <= 10) {
                dataStack.push(+answer);
                resolve(dataStack);
            } else {
                dataStack.push('---');
                resolve(dataStack);
            }
        });
    });
}

function inputString(question, dataStack) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            dataStack.push(answer);
            resolve(dataStack);
        });
    });
}

async function getUserInput() {
    console.clear();
    rl.resume();
    console.log('\nInput information about your future character:\n');
    return inputString('input name: ', [])
        .then((answers) => inputNumber('input health', answers))
        .then((answers) => inputNumber('input strenght', answers))
        .then((answers) => inputNumber('input satiety', answers))
        .then((answers) => inputNumber('input happiness', answers))
        .then((answers) => inputNumber('input intelligence', answers))
        .then((answers) => inputString('input favouriteFood: ', answers))
        .then((answers) => inputString('input favouriteActivity: ', answers))
        .finally(() => rl.pause());
}

function addNewCharacter(characterInfo) {
    const newChararcter = Object.create(baseObject, {
        name: {
            value: characterInfo[0],
            enumerable: true,
        },
        health: {
            value: characterInfo[1],
            enumerable: true,
        },
        strenght: {
            value: characterInfo[2],
            enumerable: true,
        },
        satiety: {
            value: characterInfo[3],
            enumerable: true,
        },
        happiness: {
            value: characterInfo[4],
            enumerable: true,
        },
        intelligence: {
            value: characterInfo[5],
            enumerable: true,
        },
        favouriteFood: {
            value: characterInfo[6],
            enumerable: true,
        },
        favouriteActivity: {
            value: characterInfo[7],
            enumerable: true,
        },
    });
    return newChararcter;
}

async function runApp() {
    const newCharacter = await getUserInput();
    characters.push(addNewCharacter(newCharacter));
    console.log(characters);
    rl.question(('Add new character? (type `y`/`n`). \nto show existing characters type `sh`\n'), (answer) => {
        menu(answer, runApp);
    });
}

runApp();
