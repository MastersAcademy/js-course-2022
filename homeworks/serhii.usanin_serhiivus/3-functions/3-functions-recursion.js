function exp(number, degree) {
    if (degree === 1) {
        return number;
    }
    return number * exp(number, degree - 1);
}

console.log(exp(5, 3));
