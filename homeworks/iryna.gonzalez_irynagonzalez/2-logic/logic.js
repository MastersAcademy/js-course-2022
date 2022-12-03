const firstNumber = 20;
const secondNumber = 22;
const operation = '*';

if (operation === '+') {
    console.log('sum='.concat(firstNumber + secondNumber));
} else if (operation === '-') {
    console.log('subtraction='.concat(firstNumber - secondNumber));
} else if (operation === '*') {
    console.log('multiplication='.concat(firstNumber * secondNumber));
} else if (operation === '/') {
    console.log('division='.concat(firstNumber / secondNumber));
} else if (operation === '%') {
    console.log('remainderOfTheDivision='.concat(firstNumber % secondNumber));
} else if (operation === '**') {
    console.log('raisingToPower='.concat(firstNumber ** secondNumber));
} else {
    console.log('Error! Learn math');
}

switch (operation) {
    default: console.log('Error! Learn math');
        break;
    case '+': console.log('sum='.concat(firstNumber + secondNumber));
        break;
    case '-': console.log('subtraction='.concat(firstNumber - secondNumber));
        break;
    case '*': console.log('multiplication='.concat(firstNumber * secondNumber));
        break;
    case '/': console.log('division='.concat(firstNumber / secondNumber));
        break;
    case '%': console.log('remainderOfTheDivision='.concat(firstNumber % secondNumber));
        break;
    case '**': console.log('raisingToPower='.concat(firstNumber ** secondNumber));
}
