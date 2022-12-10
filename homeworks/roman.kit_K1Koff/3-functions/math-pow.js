function mathPow(num1, num2) {
    if (num2 === 1) return num1;
    return num1 * mathPow(num1, num2 - 1);
}

console.log(mathPow(3, 4)); //  81
