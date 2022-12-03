const firstNumber = 20;
const secondNumber = 22;
const operation = '*';

if (operation === '*') {
    console.log('множення', firstNumber * secondNumber);
} else if (operation === '+') {
    console.log('додавання', firstNumber + secondNumber);
} else if (operation === '-') {
    console.log('віднімання', firstNumber - secondNumber);
} else if (operation === '/') {
    console.log('ділення', firstNumber / secondNumber);
}

// switch-case

const numFirst = 20;
const numSecond = 22;
const operationSwitch = '*';
switch (operationSwitch) {
    case '*':
        console.log('множення', numFirst * numSecond);
        break;
    case '+':
        console.log('додавання', numFirst + numSecond);
        break;
    case '-':
        console.log('віднімання', numFirst - numSecond);
        break;
    case '/':
        console.log('ділення', numFirst / numSecond);
        break;
    // no default
}
