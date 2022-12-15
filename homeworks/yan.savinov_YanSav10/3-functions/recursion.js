function getExponention(baseOfDegree, exponent) {
    if (exponent === 1) {
        return baseOfDegree;
    }
    return baseOfDegree * getExponention(baseOfDegree, exponent - 1);
}
console.log(getExponention(2, 3));
