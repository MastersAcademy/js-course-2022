const number = 2;
const degree = 3;

function recursionPow(num, deg) {
    if (deg > 1) {
        return num * recursionPow(num, deg - 1);
    }
    return num;
}

console.log(recursionPow(number, degree));
