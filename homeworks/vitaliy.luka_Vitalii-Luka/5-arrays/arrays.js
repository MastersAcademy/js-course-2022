/*
Homework 5 - Arrays
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Part.1
function createTree(height) {
    for (let i = 0; i < height; i++) {
        console.log(`${' '.repeat(height - i)}*${'*'.repeat(i * 2)}`);
    }
}

function setinput(input) {
    createTree(input);
}

const askHeight = () => new Promise((resolve) => {
    rl.question('Enter the height of the Christmas tree: ', (answer) => {
        setinput(answer);
        resolve();
    });
});

// Part.2
const mainArr = [
    [1, 4, 2, 4, 4, 2, 4, 3, 2, 6, 2, 4, 2, 4, 3, 1, 2, 4, 3],
    [1, 1, 3, 1, 1, 3, 3, 1, 6, 6, 8, 3, 3, 3, 3, 1, 4, 1, 2],
    [1, 2, 1, 4, 1, 1, 4, 7, 8, 8, 7, 7, 1, 1, 4, 3, 1, 1, 2],
    [3, 2, 3, 3, 4, 2, 7, 8, 6, 8, 6, 7, 8, 1, 2, 3, 3, 3, 4],
    [4, 1, 3, 3, 2, 8, 7, 8, 6, 7, 6, 7, 6, 7, 2, 4, 3, 2, 2],
    [3, 1, 2, 1, 7, 7, 8, 8, 8, 7, 6, 8, 8, 6, 8, 4, 1, 3, 2],
    [2, 1, 1, 7, 6, 7, 7, 8, 7, 6, 8, 6, 6, 6, 6, 8, 4, 4, 3],
    [4, 1, 6, 7, 8, 7, 8, 8, 6, 6, 7, 7, 6, 6, 6, 7, 6, 1, 2],
    [1, 6, 6, 6, 6, 8, 8, 7, 6, 6, 7, 8, 7, 8, 8, 7, 6, 7, 1],
    [8, 6, 8, 6, 6, 7, 7, 6, 6, 7, 8, 7, 6, 6, 6, 6, 7, 8, 7],
];

const christmasTree = mainArr.map((arrTransform) => arrTransform.reduce((number, currentValue) => {
    const value = (currentValue > 5) ? '*' : ' ';
    return number + value;
}, ''));

const runHomeTask = async () => {
    console.log('-----  Part.1 -----\n');
    await askHeight();
    rl.close();
    console.log('\n-----  Part.2 -----\n');
    console.log(christmasTree);
};

runHomeTask();
