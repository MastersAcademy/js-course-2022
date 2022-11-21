const randomArray = [];

const random = () => {
    for (let i = 0; i < 2; i++) {
        const randomVariable = Math.round(Math.random() * 100);
        randomArray.push(randomVariable);
    }
};

random();

const firstNumber = randomArray[0];
const secondNumber = randomArray[1];

console.log(randomArray);

console.log(`The result of addition is: ${firstNumber + secondNumber}`);
console.log(`The result of substruction is: ${firstNumber - secondNumber}`);
console.log(`The result of multiplication is: ${firstNumber * secondNumber}`);
console.log(`The result of division is: ${firstNumber / secondNumber}`);
console.log(`The remainder from division: ${firstNumber % secondNumber}`);
console.log(`The exponent is: ${firstNumber ** secondNumber}`);
