function exponentiation(firstNumber, secondNumber) {
    if (secondNumber === 1) {
        return firstNumber;
    }
    return firstNumber * exponentiation(firstNumber, secondNumber - 1);
}

console.log(`\nПіднесення до степеня: ${exponentiation(2, 4)}`);
