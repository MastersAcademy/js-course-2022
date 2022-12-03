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
