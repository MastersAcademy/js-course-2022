const firstNumber = 90;
const secondNumber = 40;

const subtractionResult = (firstNumber - secondNumber);
const additionResult = (firstNumber + secondNumber);
const multiplicationResult = (firstNumber * secondNumber);
const divisionResult = (firstNumber / secondNumber);
const remainderDivisionResult = (firstNumber % secondNumber);
const exponentiationResult = (firstNumber ** secondNumber);

const subtractionString = (String(firstNumber) + String(secondNumber));
const additionString = (String(firstNumber) - String(secondNumber));
const multiplicationString = (String(firstNumber) * String(secondNumber));
const remainderDivisionString = (String(firstNumber) % String(secondNumber));
const exponentiationString = (String(firstNumber) ** String(secondNumber));

console.log(`subtraction result: ${subtractionResult}`);
console.log(`addition result: ${additionResult}`);
console.log(`multiplication result: ${multiplicationResult}`);
console.log(`division result: ${divisionResult}`);
console.log(`remainder of division result: ${remainderDivisionResult}`);
console.log(`exponentiation result: ${exponentiationResult}`);
console.log(`subtraction string result: ${subtractionString}`);
console.log(`addition string result: ${additionString}`);
console.log(`multiplication string result: ${multiplicationString}`);
console.log(`remainder of division string result: ${remainderDivisionString}`);
console.log(`exponentiation string result: ${exponentiationString}`);
