function mathPow(base, power) {
    if (power === 1) return base;
    return base * mathPow(base, power - 1);
}

console.log(mathPow(3, 4)); //  81
