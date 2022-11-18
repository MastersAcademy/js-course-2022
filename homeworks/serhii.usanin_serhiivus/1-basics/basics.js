const firstNumber = 15;
const secondNumber = 17;
const degree = 3;
const firstString = 'Hello ';
const secondString = 'world ';

let sum = 0;
let difference = 0;
let product = 0;
let fraction = 0;
let renOfDivision = 0;
let expFirst = 0;
let divByZero = 0;
let divByString = 0;
const exampNull = null;
let concat = '';
let diffString = '';

sum = firstNumber + secondNumber;
console.log('First number = ', firstNumber,
    ' Second number =', secondNumber, ' Sum = ', sum, typeof sum);

difference = firstNumber - secondNumber;
console.log('First number = ', firstNumber,
    ' Second number =', secondNumber, ' Difference = ', difference, typeof difference);

product = firstNumber * secondNumber;
console.log('First number = ', firstNumber,
    ' Second number =', secondNumber, ' Product = ', product, typeof product);

fraction = firstNumber / secondNumber;
console.log('First number = ', firstNumber,
    ' Second number =', secondNumber, ' Fraction = ', fraction, typeof fraction);

renOfDivision = firstNumber % secondNumber;
console.log('First number = ', firstNumber,
    ' Second number =', secondNumber, ' Remainder of division = ', renOfDivision, typeof renOfDivision);

expFirst = firstNumber ** degree;
console.log('First number = ', firstNumber,
    ' Degree =', degree, ' Exponentiate = ', expFirst, typeof expFirst);

divByZero = firstNumber / 0;
console.log('First number = ', firstNumber, ' Division by zero = ', divByZero, typeof divByZero);

divByString = firstNumber / 'ss';
console.log('First number = ', firstNumber, ' Division by string = ', divByString, typeof divByString);

console.log(' null = ', exampNull, typeof exampNull);

concat = firstString + secondString;
console.log(' Concat = ', concat, typeof concat);

diffString = firstString - secondString;
console.log(' diff = ', diffString, typeof diffString);

console.log('undef:', typeof kjf);
