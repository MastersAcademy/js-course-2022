const firstNumber = 15;
const secondNumber = 7;

console.log('*** Арефметичні операції над двома числами: 15 і 7 ***');

let adding = firstNumber + secondNumber;
console.log(`Додавання: ${adding}`);

let subtraction = firstNumber - secondNumber;
console.log(`Віднімання: ${subtraction}`);

let multiplication = firstNumber * secondNumber;
console.log(`Множення: ${multiplication}`);

let division = (firstNumber / secondNumber).toFixed(2);
console.log(`Ділення: ${division}`);

let remainderOfdivision = firstNumber % secondNumber;
console.log(`Остача від ділення: ${remainderOfdivision}`);

let exponentiation = firstNumber ** secondNumber;
console.log(`Піднесення до степеня: ${exponentiation}`);
