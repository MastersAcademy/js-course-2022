const firstNumber = 2;
const secondNumber = 18;
const thirdNumber = 11;
const forthNumber = '5';

const sum = firstNumber + secondNumber; // 20
const multiplication = String(firstNumber * thirdNumber); // '22'
const remainder = secondNumber % thirdNumber; // 7
const power = firstNumber ** forthNumber; // 32
const subtraction = power - multiplication; // 10
const fraction = subtraction / forthNumber; // 2
const number30 = forthNumber * (remainder - fraction / firstNumber); // 30

console.log(`
    Next MA lesson will be on the ${number30 - remainder}rd of the ${multiplication / fraction}th month of ${sum + multiplication}
    at ${sum - fraction} : ${number30}
`);
