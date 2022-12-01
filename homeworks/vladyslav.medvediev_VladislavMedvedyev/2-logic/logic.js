const readline = require('readline-sync');

const firstNumber = Number(readline.question('Enter the first number '));
const secondNumber = Number(readline.question('Enter the second number '));
const operation = readline.question('Enter the operation ');

function checkEnteredNumbers() {
    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
        console.log('Please enter correct value of numbers');
    } else {
        console.log(`You enter: first number is ${firstNumber}, second number is ${secondNumber}`);
    }
}

checkEnteredNumbers();

function calc() {
    switch (operation) {
        case '*':
            console.log(firstNumber * secondNumber);
            break;
        case '/':
            console.log(firstNumber / secondNumber);
            break;
        case '+':
            console.log(firstNumber + secondNumber);
            break;
        case '-':
            console.log(firstNumber - secondNumber);
            break;
        case '%':
            console.log(firstNumber % secondNumber);
            break;
        case '**':
            console.log(firstNumber ** secondNumber);
            break;
        default:
            console.log('Please enter correct value of operation (it can be "+", "-", "*", "/", "%", "**")');
    }
}

calc();
