// Homework 1 - Basics, Mathematics

// Creating some variables
let firstNumber = 34;
let secondNumber = 12;
const firstString = 'Hello';
const secondString = ' World!';
let stringNumber = '104';
const isString = true;
const valueIsNull = null;
let valueISUndefined;

// Doing some mathematics
console.log(firstNumber + secondNumber);
console.log(secondNumber - firstNumber);

// Here we expect string concat with 34104 as an answer
console.log(firstNumber + stringNumber);

// Backtick output type
console.log(`Sum of ${firstNumber} and ${secondNumber} is equal to ${firstNumber + secondNumber}`);

// Hello World!
console.log(firstString + secondString);

// String concat
console.log(String(firstNumber) + stringNumber);

// Let's change the value of variables to smaller for easier calculation of power or dividing
firstNumber = 10;
secondNumber = 2;
stringNumber = '3';
console.log(firstNumber * (-secondNumber));
console.log(firstNumber / secondNumber);
console.log(firstNumber % stringNumber);
console.log(firstNumber ** secondNumber);

// Getting NaN output
console.log(firstString * secondNumber);
console.log(valueISUndefined + secondNumber);

// Mathematics with boolean and null type
console.log(isString + firstNumber);
console.log(valueIsNull + Number(stringNumber));

// Type of check
console.log(typeof valueISUndefined);
console.log(typeof firstNumber);
console.log(typeof firstString);
console.log(typeof firstNumber.toString());
