function getIfBasis(basis, exponent) {
    if (exponent === 1) {
        return basis;
    }
    return basis * getIfBasis(basis, exponent - 1);
}
console.log(getIfBasis(2, 8));
