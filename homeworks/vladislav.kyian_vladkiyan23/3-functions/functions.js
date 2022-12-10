const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

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

let weightOfOil;
let weightOfWater;
let weightOfMercury;

function calculateWeight(water, oil, mercury) {
    const totalAmount = weightOfOil + weightOfWater + weightOfMercury;
    return totalAmount;
};

const water = getWeight(1000, WATER, 5);
const oil = getWeight(926, OIL, 3);
const mercury = getWeight(1355, MERCURY, 2);



console.log(calculateWeight(water, oil, mercury));
