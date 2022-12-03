const rl = require('readline')
    .createInterface({ input: process.stdin });

const firstNumber = 20;
const secondNumber = 22;
const operations = {
    add: '*', remove: '-', plus: '+', drop: '/',
};

const result = (formula) => console.log('Result:', formula);

rl.question('Enter operation: ', (operation) => {
    const {
        add, remove, plus, drop,
    } = operations;

    switch (operation) {
        case add: result(firstNumber + secondNumber);
            break;

        case remove: result(firstNumber - secondNumber);
            break;

        case plus: result(firstNumber + secondNumber);
            break;

        case drop: result(firstNumber / secondNumber);
            break;

        default: console.log('Putin Huilo');
    }

    rl.close();
});
