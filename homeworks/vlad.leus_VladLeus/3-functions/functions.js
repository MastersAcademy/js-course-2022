const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

function getWeight(weight, count) {
    return weight * count;
}

function calculateSummaryWeight() {
    return getWeight(OIL, 3)
        + getWeight(WATER, 5)
        + getWeight(MERCURY, 2);
}

const sumOfWeights = calculateSummaryWeight();
console.log(`The weight of all liquids is equal to ${sumOfWeights}`);

const num = 2;
const pow = 3;
function getResultOfPower(number, power) {
    if (power === 0) {
        return 1;
    }
    return number * getResultOfPower(number, power - 1);
}

const result = getResultOfPower(num, pow);
console.log(result);
