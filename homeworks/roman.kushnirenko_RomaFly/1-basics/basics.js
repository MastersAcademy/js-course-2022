const firstNumber = 15;
const secondNumber = 7;

console.log('*** Арефметичні операції над двома числами: 15 і 7 ***');

const adding = firstNumber + secondNumber;
console.log(`Додавання: ${adding}`);

const subtraction = firstNumber - secondNumber;
console.log(`Віднімання: ${subtraction}`);

const multiplication = firstNumber * secondNumber;
console.log(`Множення: ${multiplication}`);

const division = (firstNumber / secondNumber).toFixed(2);
console.log(`Ділення: ${division}`);

const remainderOfdivision = firstNumber % secondNumber;
console.log(`Остача від ділення: ${remainderOfdivision}`);

const exponentiation = firstNumber ** secondNumber;
console.log(`Піднесення до степеня: ${exponentiation}`);
