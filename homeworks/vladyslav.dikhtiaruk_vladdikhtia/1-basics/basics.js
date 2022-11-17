const firstNumber = 10;
const secondNumber = 5;
const thirdNumber = 27;
const fourthNumber = 87;

console.log(firstNumber + secondNumber);
console.log(firstNumber + secondNumber - fourthNumber + thirdNumber);
console.log(secondNumber - thirdNumber);
console.log(fourthNumber * firstNumber);
console.log(thirdNumber * (firstNumber + secondNumber));
console.log(fourthNumber / firstNumber);
console.log(firstNumber % secondNumber);
console.log(fourthNumber % (fourthNumber - thirdNumber - (secondNumber ** 2)));
console.log((firstNumber ** secondNumber) - (secondNumber ** firstNumber));

const firstStringNumber = '123';
const secondStringNumber = '43';
const fNumber = Number(firstStringNumber); //   fNumber = 123;
const sNumber = Number(secondStringNumber); //  sNumber= 43;
console.log(fNumber, typeof fNumber, fNumber + sNumber);

const a = true;
const b = Number(a); // b = 1
console.log(b - a);
console.log(a + b);
