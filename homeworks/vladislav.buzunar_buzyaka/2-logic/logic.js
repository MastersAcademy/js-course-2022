const firstNumber = 20;
const secondNumber = 22;
const operationMult = '*';
const resultMult = 20 * 22;
const operationDivis = '/';
const resultDivis = 20 / 22;
const operationAddit = '+';
const resultAddit = 20 + 22;
const operationSubtract = '-';
const resultSubtract = 20 - 22;

// If else statement
console.log('If/else statement!!!');

if (operationMult === '*') {
    console.log(`${firstNumber} ${operationMult} ${secondNumber} = ${resultMult}`);
} else if(operationDivis === '/'){
    console.log(`${firstNumber} ${operationDivis} ${secondNumber} = ${resultDivis}`);
} else if(operationAddit === '+'){
    console.log(`${firstNumber} ${operationAddit} ${secondNumber} = ${resultAddit}`);
} else if(operationSubtract === '-'){
    console.log(`${firstNumber} ${operationSubtract} ${secondNumber} = ${resultSubtract}`);
} else {
    console.log('Error...');
}

// Switch statement

const firstUserNumber = prompt('Вкажіть число х : ');
const secondUserNumber = prompt('Вкажіть число y : ');
const valueOperation = prompt('Вкажіть оператор який ви би хотіли використувати між "х" та "y"... Доступні( "*" "/" "+" "-" )');

switch (valueOperation) {
    case '*':
        alert(`${firstUserNumber} ${operationMult} ${secondUserNumber} = ${firstUserNumber * secondUserNumber}`);
        break;
    case '/':
        alert(`${firstUserNumber} ${operationDivis} ${secondUserNumber} = ${firstUserNumber / secondUserNumber}`);
        break;
    case '+':
        alert(`${firstUserNumber} ${operationAddit} ${secondUserNumber} = ${firstUserNumber + secondUserNumber}`);
        break;
    case '-':
        alert(`${firstUserNumber} ${operationSubtract} ${secondUserNumber} = ${firstUserNumber - secondUserNumber}`);
        break;
    default:
        alert('На жаль, такого не існує, введіть з списку доступних...');
}
