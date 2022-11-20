const number = 123;
const valueOfPi = Math.PI;
const stringNumber = '11';
const string = 'Hello';
const message = `${string} world!`;
const isTrue = false;

console.log(message); // Hello world!

let sum = number + stringNumber;
console.log(sum); // '12311'
sum = number + +stringNumber;
console.log(sum); // 134
console.log(true + true + true - false); // 3

let diff = valueOfPi - (valueOfPi % 1);
console.log(diff); // 3
diff = -Infinity - 1;
console.log(diff); // -Infinity

let mul = number * Number(stringNumber);
console.log(mul); // 1353
mul = string * number;
console.log(mul); // NaN

let div = 1 / 0;
console.log(div); // Infinity
div = 0 / 1;
console.log(div); // 0
console.log('6' / '2'); // 3

console.log(isTrue === 0); // false
console.log(valueOfPi !== isTrue); // true
const isGreater = 5 < 1;
console.log(isGreater); // false

let sqr = Number(stringNumber) ** 3;
console.log(sqr); // 1331
sqr = 2 ** 2;
console.log(sqr); // 4

let remainder = 23 % 10;
console.log(remainder); // 3
remainder = number % stringNumber;
console.log(remainder); // 2
