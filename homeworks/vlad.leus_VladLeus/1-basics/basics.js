// Homework 1 - Basics, Mathematics

//Creating some variables
let firstNum = 34;
let secNum = 12;
let firstString = 'Hello';
let secString = ' World!'
let stringNum = '104';
let isString = true;
let valueIsNull = null;
let undefVariable;

//Doing some mathematics

console.log(firstNum + secNum);
console.log(secNum - firstNum);

// here we expect string concat with 34104 as an answer
console.log(firstNum + stringNum);

//backtick output type
console.log(`Sum of ${firstNum} and ${secNum} is equal to ${firstNum + secNum}`)

// Hello World!
console.log(firstString + secString);

console.log(String(firstNum) + stringNum);

// Let's change the value of variables to smaller for easier calculation of power or dividing
firstNum = 10;
secNum = 2;
stringNum = '3';
console.log(firstNum * (-secNum));
console.log(firstNum / secNum);
console.log(firstNum % stringNum);
console.log(firstNum ** secNum);

//Getting NaN output
console.log(firstString * secNum);
console.log(undefVariable + secNum)


console.log(isString + firstNum);
console.log(valueIsNull + Number(stringNum));

console.log(typeof undefVariable);













