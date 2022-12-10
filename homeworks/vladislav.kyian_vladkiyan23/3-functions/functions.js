const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

function getWeight(weight, liquid, count) {
    if (liquid === OIL) {
        const value = weight * count;
        return value;
    }

    if (liquid === WATER) {
        const value = weight * count;
        return value;
    }

    if (liquid === MERCURY) {
        const value = weight * count;
        return value;
    }
};

function calculateWeight() {
    return getWeight(926, OIL, 3) + getWeight(1000, WATER, 5) + getWeight(1355, MERCURY, 2);
}

console.log(calculateWeight(OIL, WATER, MERCURY));
