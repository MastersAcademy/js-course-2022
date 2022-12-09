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

console.log(totalWeight());
