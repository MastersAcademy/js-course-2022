// Our variables
const firstNumber = 5;
const secondNumber = 2;
const operation = '*';

// If-else statement

console.log('-------------if-else statement-------------');
if (operation === '+') {
    console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
} else if (operation === '-') {
    console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
} else if (operation === '*') {
    console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
} else if (operation === '/') {
    console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
} else if (operation === '**') {
    console.log(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);
} else {
    console.log('An incorrect operation input, try again please');
}

// Switch-case statement

console.log('-------------switch-case statement-------------');
switch (operation) {
    case '+':
        console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
        break;
    case '-':
        console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
        break;
    case '*':
        console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
        break;
    case '/':
        console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
        break;
    case '**':
        console.log(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);
        break;
    default:
        console.log('An incorrect operation input, try again please');
        break;
}
