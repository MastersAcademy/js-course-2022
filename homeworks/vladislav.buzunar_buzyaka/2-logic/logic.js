let result;

// If else statement

console.log('If/else statement!!!');

const arg = process.argv;
const firstInputNumber = Number(arg[2]);
const secondInputNumber = Number(arg[3]);
const userOperationInput = arg[4];
console.log(arg[2]);
console.log(arg[3]);
console.log(arg[4]);

if (userOperationInput === '*') {
    result = firstInputNumber * secondInputNumber;
} else if (userOperationInput === '//') {
    result = firstInputNumber / secondInputNumber;
} else if (userOperationInput === '+') {
    result = firstInputNumber + secondInputNumber;
} else if (userOperationInput === '-') {
    result = firstInputNumber - secondInputNumber;
}

console.log(`${firstInputNumber} ${userOperationInput} ${secondInputNumber} = ${result}`);
