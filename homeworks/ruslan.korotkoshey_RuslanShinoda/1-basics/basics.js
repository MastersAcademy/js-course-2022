/*
Створити декілька довільних переміних в файлі і далі виконати з ними наступні арефметичні операції:
Додавання +
Віднімання -
Множення *
Ділення /
Остача від ділення %
Піднесення до степеня **
*/

const firstNumber = 10;
const secondNumber = 5;
const thirdNumber = '2';

let addition = 0;
let subtraction = 0;
let multiplication = 0;
let division = 0;
let remainderOfDivision = 0;
let exponentiation = 0;
let equation = 0;

addition = firstNumber + secondNumber + thirdNumber;
// ( 10 + 5 ) + строка '2' = 15 + строка '2' = строка '152'
console.log(addition);

addition = firstNumber + secondNumber + +thirdNumber;
// ( 10 + 5 ) + строка '2' переведеться в число 2 = 17

subtraction = firstNumber - secondNumber - thirdNumber;
// ( 10 - 5 ) - строка '2' яка автоматично під капотом переведеться в число 2 = 3
console.log(subtraction);

multiplication = firstNumber * secondNumber * thirdNumber;
// ( 10 * 5 ) * на строку '2' яка автоматично під капотом переведеться в число 2 = 100
console.log(multiplication);

division = firstNumber / secondNumber / thirdNumber;
// ( 10 / 5 ) / на строку '2' яка автоматично під капотом переведеться в число 2 = 1
console.log(division);

remainderOfDivision = firstNumber % secondNumber % thirdNumber;
/*
( 10 / 5 ) / на строку '2' яка автоматично під капотом переведеться в число 2 =
(10 / 5 (ділиться без залишку, тобто 0)) / 2 = 0 (так як в залишку залишеться саме число)
*/
console.log(remainderOfDivision);

remainderOfDivision = secondNumber % thirdNumber % firstNumber;
/*
( 5 / на строку '2' яка автоматично під капотом переведеться в число 2  ) / 10 =
(5 / 2 (ділиться з залишком 1 ) ) / 10 = 1 (так як в залишку залишеться саме число)
*/
console.log(remainderOfDivision);

exponentiation = firstNumber ** secondNumber;
// 10 підноситься до степеня 10 = 100000
console.log(exponentiation);
exponentiation = secondNumber ** thirdNumber;
/*
5 підноситься до степеня 2, так як строка '2' автоматично під капотом переведеться в число 2
= 25
*/
console.log(exponentiation);

equation = ((secondNumber ** thirdNumber) % firstNumber) - thirdNumber
+ ((secondNumber * firstNumber) / secondNumber);
/* Приоритет операторів різний, тому в матиматичному вигляді це рівнянн буде таким:
(5 ** 2 % 10) - 2 + (5 * 10 / 5) = 5 - 2 + 10 = 13 */
console.log(equation);
