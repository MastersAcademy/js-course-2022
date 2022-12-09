const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

function getWeight(weight, liquid, count) {
    let weightLiquid = 0;
    if (liquid === OIL
    || liquid === WATER
    || liquid === MERCURY) {
        weightLiquid = weight * count;
    } else {
        console.log('There is no such liquid');
    }
    return weightLiquid;
}

const weightOil = getWeight(926, OIL, 3);
const weightWater = getWeight(1000, WATER, 5);
const weightMercury = getWeight(1355, MERCURY, 2);

function totalWeight() {
    return weightOil + weightWater + weightMercury;
}

console.log('The total mass of liquids has arrived to the station: ', totalWeight());

function exponentiationOfNumber(a, b) {
    if (b === 1) {
        return a;
    }
    return b * exponentiationOfNumber(a, b - 1);
}

console.log('The result of reducing the number 5 to the 4th power is ', exponentiationOfNumber(5, 4));
