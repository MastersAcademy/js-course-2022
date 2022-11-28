const firstNumber = 20;
const secondNumber = 22;
const operation = '*';
let resOfArithmAction;

// solution using if-else construction
if (operation === '+') {
    resOfArithmAction = firstNumber + secondNumber;
} else if (operation === '-') {
    resOfArithmAction = firstNumber - secondNumber;
} else if (operation === '/') {
    resOfArithmAction = firstNumber / secondNumber;
} else if (operation === '*') {
    resOfArithmAction = firstNumber * secondNumber;
}
console.log(`The result of calculation using if-else construction: ${firstNumber} ${operation} ${secondNumber} = ${resOfArithmAction}`);

// solution using switch case
switch (operation) {
    case '+':
        resOfArithmAction = firstNumber + secondNumber;
        break;
    case '-':
        resOfArithmAction = firstNumber - secondNumber;
        break;
    case '/':
        resOfArithmAction = firstNumber / secondNumber;
        break;
    default:
        resOfArithmAction = firstNumber * secondNumber;// by default operation is *
}
console.log(`The result of calculation using switch case construction: ${firstNumber} ${operation} ${secondNumber} = ${resOfArithmAction}`);
