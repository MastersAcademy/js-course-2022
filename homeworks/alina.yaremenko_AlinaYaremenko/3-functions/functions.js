const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;
const TANK_VOLUME = 1;

const OIL_COUNT = 3;
const WATER_COUNT = 5;
const MERCURY_COUNT = 2;

const getWeight = (weight, liquid, count) => {
    const result = weight * liquid * count;
    return result;
};

const oilWeight = getWeight(OIL, TANK_VOLUME, OIL_COUNT);
const waterWeight = getWeight(WATER, TANK_VOLUME, WATER_COUNT);
const mercuryWeight = getWeight(MERCURY, TANK_VOLUME, MERCURY_COUNT);

const result = oilWeight + waterWeight + mercuryWeight;
console.log(result);
