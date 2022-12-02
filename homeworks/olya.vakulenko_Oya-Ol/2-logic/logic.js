const firstNumber = 20;
const secondNumber = 22;
const operation = '%';

let result;

if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '/') {
    result = firstNumber / secondNumber;
} else if (operation === '%') {
    result = firstNumber % secondNumber;
}

console.log(result);
