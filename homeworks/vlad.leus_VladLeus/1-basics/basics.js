// Homework 1 - Basics, Mathematics

// Creating some variables
let firstNum = 34;
let secNum = 12;
const firstString = 'Hello';
const secString = ' World!';
let stringNum = '104';
const isString = true;
const valueIsNull = null;
let undefVariable;

// Doing some mathematics
console.log(firstNum + secNum);
console.log(secNum - firstNum);

// Here we expect string concat with 34104 as an answer
console.log(firstNum + stringNum);

// Backtick output type
console.log(`Sum of ${firstNum} and ${secNum} is equal to ${firstNum + secNum}`);

// Hello World!
console.log(firstString + secString);

// String concat
console.log(String(firstNum) + stringNum);

// Let's change the value of variables to smaller for easier calculation of power or dividing
firstNum = 10;
secNum = 2;
stringNum = '3';
console.log(firstNum * (-secNum));
console.log(firstNum / secNum);
console.log(firstNum % stringNum);
console.log(firstNum ** secNum);

// Getting NaN output
console.log(firstString * secNum);
console.log(undefVariable + secNum);

// Mathematics with boolean and null type
console.log(isString + firstNum);
console.log(valueIsNull + Number(stringNum));

// Type of check
console.log(typeof undefVariable);
console.log(typeof firstNum);
console.log(typeof firstString);
console.log(typeof firstNum.toString());
