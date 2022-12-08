const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const OIL_COUNT = 3;
const WATER_COUNT = 5;
const MERCURY_COUNT = 2;

const TANK_WEIGHT = 1;

const getWeight = (weight, liquid, count) => weight * liquid * count;

const oilWeight = getWeight(TANK_WEIGHT, OIL, OIL_COUNT);
const waterWeight = getWeight(TANK_WEIGHT, WATER, WATER_COUNT);
const mercuryWeight = getWeight(TANK_WEIGHT, MERCURY, MERCURY_COUNT);

function countTanksWeight(liquid1, liquid2, liquid3) {
    return liquid1 + liquid2 + liquid3;
}

console.log(countTanksWeight(oilWeight, waterWeight, mercuryWeight));
