// арефметичні операції

// оголошення змінних
const firstNumber = 20;
const secondNumber = 5;
const firstString = 'Hello';
const secondString = 'world!';
let result;

// додавання
result = firstString + ' ' + secondString;
console.log(result);

result = firstNumber + secondNumber;
console.log(firstNumber + ' додати ' + secondNumber + ' дорівнює ' + result);

// віднімання
result = firstNumber - secondNumber;
console.log(`${firstNumber} - ${secondNumber} = ${result}`);

// множення
result = firstNumber * secondNumber;
console.log(`${firstNumber} * ${secondNumber} = ${result}`);

// ділення
result = firstNumber / secondNumber;
console.log(`${firstNumber} / ${secondNumber} = ${result}`);

// остача від діленя
result = firstNumber % secondNumber;
console.log(`остача від діленя ${firstNumber} на ${secondNumber} дорівнює ${result}`);

// піднесення до степеня
result = firstNumber ** secondNumber;
console.log(`${firstNumber} в степені ${secondNumber} дорівнює ${result}`);