/*
Homework 5 - Arrays
*/

// Part.1
console.log('-----  Part.1 -----\n');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function createTree(height) {
    for (let i = 0; i < height; i++) {
        console.log(`${' '.repeat(height - i)}*${'*'.repeat(i * 2)}`);
    }
}

function setinput(input) {
    createTree(input);
    rl.close();
}
rl.question('Enter the height of the Christmas tree: ', setinput);
