let result;

// Switch statement

const firstUserNumber = prompt('Вкажіть число х : ');
const secondUserNumber = prompt('Вкажіть число y : ');
const valueOperation = prompt('Вкажіть оператор який ви би хотіли використувати між "х" та "y"... Доступні( "*" "/" "+" "-" )');

result = `${firstUserNumber} ${valueOperation} ${secondUserNumber}`;

switch (valueOperation) {
    case '*':
        result = firstUserNumber * secondUserNumber;
        alert(`${firstUserNumber} ${valueOperation} ${secondUserNumber} =`, result);
        break;
    case '/':
        result = firstUserNumber / secondUserNumber;
        alert(`${firstUserNumber} ${valueOperation} ${secondUserNumber} =`, result);
        break;
    case '+':
        result = firstUserNumber + secondUserNumber;
        alert(`${firstUserNumber} ${valueOperation} ${secondUserNumber} =`, result);
        break;
    case '-':
        result = firstUserNumber - secondUserNumber;
        alert(`${firstUserNumber} ${valueOperation} ${secondUserNumber} =`, result);
        break;
    default:
        alert('На жаль, такого не існує, введіть з списку доступних...');
}
