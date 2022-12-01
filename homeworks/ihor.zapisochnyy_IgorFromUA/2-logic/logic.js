// умовні оператори

const firstNumber = 20;
const secondNumber = 22;
const operation = '/';

//   --------- Варіант з if ---------

// if(operation === '*'){
//     console.log(firstNumber * secondNumber);
// }else if(operation === '/'){
//     console.log(firstNumber / secondNumber);
// }else if(operation === '+'){
//     console.log(firstNumber + secondNumber);
// }else if(operation === '-'){
//     console.log(firstNumber - secondNumber);
// }else{
//     console.log('оператор не підтримується');
// }

//   --------- Варіант з switch ---------

switch (operation) {
    case '*':
        console.log(firstNumber * secondNumber);
        break;
    case '/':
        console.log(firstNumber / secondNumber);
        break;
    case '+':
        console.log(firstNumber + secondNumber);
        break;
    case '-':
        console.log(firstNumber - secondNumber);
        break;

    default:
        console.log('оператор не підтримується');
        break;
}
