const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

let weightOfOil;
let weightOfWater;
let weightOfMercury;

let water = getWeight(1000, WATER, 5);
let oil = getWeight(926, OIL, 3);
let mercury = getWeight(1355, MERCURY, 2);

function calculateWeight(water, oil, mercury) {
    let totalAmount = weightOfOil + weightOfWater + weightOfMercury;
    return totalAmount;
};

function getWeight(weight, liquid, count) {
    if (liquid === OIL) {
        weightOfOil = OIL * count;
        return weightOfOil;
    }

    else if (liquid === WATER) {
        weightOfWater = WATER * count;
        return weightOfWater;
    }

    else if (liquid === MERCURY) {
        weightOfMercury = MERCURY * count;
        return weightOfMercury;
    }

    else {
        console.log('Error...');
    }
};

console.log(calculateWeight(water, oil, mercury));
