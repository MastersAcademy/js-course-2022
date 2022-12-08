// Перший варіант - під окремі значення змінної operation

const firstNumber = 20;
const secondNumber = 22;
const operation = '*';
// const operation = '/';
// const operation = '+';
// const operation = '-';
// const operation = '%';
// const operation = '**';

if (operation === '*') {
    const result = firstNumber * secondNumber;
    console.log(`Результат обраної операції: ${result}`);
} else if (operation === '/') {
    const result = firstNumber / secondNumber;
    console.log(`Результат обраної операції: ${result}`);
} else if (operation === '+') {
    const result = firstNumber + secondNumber;
    console.log(`Результат обраної операції: ${result}`);
} else if (operation === '-') {
    const result = firstNumber - secondNumber;
    console.log(`Результат обраної операції: ${result}`);
} else if (operation === '%') {
    const result = firstNumber % secondNumber;
    console.log(`Результат обраної операції: ${result}`);
} else if (operation === '**') {
    const result = firstNumber ** secondNumber;
    console.log(`Результат обраної операції: ${result}`);
} else {
    console.log('Обрано відсутній оператор');
}
