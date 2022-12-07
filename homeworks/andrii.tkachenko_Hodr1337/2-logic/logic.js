const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calculactionlogic(a, b, operation) {
    let calculationResult;
    if (operation === '+') {
        calculationResult = a + b;
    } else if (operation === '-') {
        calculationResult = a - b;
    } else if (operation === '*') {
        calculationResult = a * b;
    } else if (operation === '/') {
        calculationResult = a / b;
    } else if (operation === '**') {
        calculationResult = a ** b;
    } else if (operation === '%') {
        calculationResult = a % b;
    } else {
        console.log('You entered wrong operator. Try again please');
    }
    return calculationResult;
}

rl.question('Enter first number ', (answer) => {
    const firstNumber = Number(answer);
    if (Number.isNaN(firstNumber)) {
        console.log('You entered not a number. Try again please');
        return rl.close();
    }

    rl.question('Enter operator ', (operator) => {
        rl.question('Enter second number ', (answer2) => {
            const secondNumber = Number(answer2);
            if (Number.isNaN(secondNumber)) {
                console.log('You entered not a number. Try again please');
                return rl.close();
            }
            const hereComeTheMagic = calculactionlogic(firstNumber, secondNumber, operator);
            console.log(hereComeTheMagic);
            rl.close();
            return hereComeTheMagic;
        });
    });
    return 'Success';
});
