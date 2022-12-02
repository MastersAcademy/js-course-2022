const operationMult = '*';
const operationDivis = '/';
const operationAddit = '+';
const operationSubtract = '-';

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
