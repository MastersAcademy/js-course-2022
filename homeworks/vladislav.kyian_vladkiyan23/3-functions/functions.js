const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

function getWeight(weight, liquid, count) {
    if (liquid === OIL) {
        return weight * count;
    }

    if (liquid === WATER) {
        return weight * count;
    }

    if (liquid === MERCURY) {
        return weight * count;
    }
};

function calculateWeight(oil, water, mercury) {
    return getWeight(926, OIL, 3) + getWeight(1000, WATER, 5) + getWeight(1355, MERCURY, 2);
}

console.log(calculateWeight(OIL, WATER, MERCURY));
