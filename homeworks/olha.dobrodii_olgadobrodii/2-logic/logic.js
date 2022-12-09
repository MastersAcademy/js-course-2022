const firstNumber = 20;
const secondNumber = 22;
const operation = '/';
const result = 'в результаті ви отримали число';
// Завдання
if (operation === '/') {
    console.log(`Ділення: ${result} ${firstNumber / secondNumber}`);
} else if (operation === '+') {
    console.log(`Додавання: ${result} ${firstNumber + secondNumber}`);
} else if (operation === '*') {
    console.log(`Множення: ${result} ${firstNumber * secondNumber}`);
} else if (operation === '-') {
    console.log(`Віднімання: ${result} ${firstNumber - secondNumber}`);
} else {
    console.log('Упс, щось пішло не так');
}
// Завдання з зірочкою
switch (operation) {
    case '/':
        console.log(`Ділення: ${result} ${firstNumber / secondNumber}`);
        break;
    case '+':
        console.log(`Додавання: ${result} ${firstNumber + secondNumber}`);
        break;
    case '*':
        console.log(`Множення: ${result} ${firstNumber * secondNumber}`);
        break;
    case '-':
        console.log(`Віднімання: ${result} ${firstNumber - secondNumber}`);
        break;
    default:
        console.log('Упс, щось пішло не так');
}
