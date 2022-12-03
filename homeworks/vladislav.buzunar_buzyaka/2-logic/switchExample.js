let result;

// Switch statement

const firstUserNumber = Number(prompt('Вкажіть число х : '));
const secondUserNumber = Number(prompt('Вкажіть число y : '));
const valueOperation = prompt('Вкажіть оператор який ви би хотіли використувати між "х" та "y"... Доступні( "*" "/" "+" "-" )');

switch (valueOperation) {
    case '*':
        result = firstUserNumber * secondUserNumber;
        break;
    case '/':
        result = firstUserNumber / secondUserNumber;
        break;
    case '+':
        result = firstUserNumber + secondUserNumber;
        break;
    case '-':
        result = firstUserNumber - secondUserNumber;
        break;
    default:
        alert('На жаль, такого не існує, введіть з списку доступних...');
}

if (result) {
    alert(`${firstUserNumber} ${valueOperation} ${secondUserNumber} = ${result}`);
} else {
    alert('В значення "х" та "у" можна задавати лише числа. Повторіть спробу!');
}
