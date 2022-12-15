function exponentiationOfNumber(a, b) {
    if (b === 1) {
        return a;
    }
    return b * exponentiationOfNumber(a, b - 1);
}

console.log('The result of reducing the number 5 to the 4th power is ', exponentiationOfNumber(5, 4));
