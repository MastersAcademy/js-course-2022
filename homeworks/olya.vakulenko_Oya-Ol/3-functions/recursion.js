// Рекурсія

function getNumber(num, degree) {
    if (num < 1) return 1;
    return num * getNumber(num, degree - 1);
}

console.log(getNumber(5, 8));
