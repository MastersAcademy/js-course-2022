// Рекурсія

function getPow(base, exponent) {
    if (exponent !== 1) {
        return base * getPow(base, exponent - 1);
    }
    return base;
}

console.log(getPow(5, 8));
