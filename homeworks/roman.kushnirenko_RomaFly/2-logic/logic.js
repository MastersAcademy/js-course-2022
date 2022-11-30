const firstNumber = 20;
const secondNumber = 22;
const operation = '*';

if (operation === '*') {
    console.log(`Множення: ${firstNumber * secondNumber}`);
} else if ((operation === '/')) {
    console.log(`Ділення: ${firstNumber / secondNumber}`);
} else if ((operation === '+')) {
    console.log(`Додавання: ${firstNumber + secondNumber}`);
} else if ((operation === '-')) {
    console.log(`Віднімання: ${firstNumber - secondNumber}`);
} else if ((operation === '%')) {
    console.log(`Остача від ділення: ${firstNumber % secondNumber}`);
} else if ((operation === '**')) {
    console.log(`Піднесення до степеня: ${firstNumber ** secondNumber}`);
} else {
    console.log('Некоректний оператор');
}

switch (operation) {
    case '*':
        console.log(`Множення: ${firstNumber * secondNumber}`);
        break;
    case '/':
        console.log(`Ділення: ${firstNumber / secondNumber}`);
        break;
    case '+':
        console.log(`Додавання: ${firstNumber + secondNumber}`);
        break;
    case '-':
        console.log(`Віднімання: ${firstNumber - secondNumber}`);
        break;
    case '%':
        console.log(`Остача від ділення: ${firstNumber % secondNumber}`);
        break;
    case '**':
        console.log(`Піднесення до степеня: ${firstNumber ** secondNumber}`);
        break;
    default:
        console.log('Некоректний оператор');
}
