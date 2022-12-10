const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

function getWeight(weight, liquid, count) {
    return liquid * count;
}

console.log(getWeight(0, OIL, 3) + getWeight(0, WATER, 5) + getWeight(0, MERCURY, 2));

function exp(number, degree) {
    if (degree === 1) {
        return number;
    }
    return number * exp(number, degree - 1);
}

console.log(exp(5, 3));
