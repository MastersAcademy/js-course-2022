const OIL_WEIGHT = 926;
const WATER_WEIGHT = 1000;
const MERCURY_WEIGHT = 1355;
const TANK_LIQUID_VOLUME = 1;

const OIL_TANK_COUNT = 3;
const WATER_TANK_COUNT = 5;
const MERCURY_TANK_COUNT = 2;

const getWeight = (weight, liquid, count) => (weight * liquid * count);

const oilTotalWeight = getWeight(OIL_WEIGHT, TANK_LIQUID_VOLUME, OIL_TANK_COUNT);
const waterTotalWeight = getWeight(WATER_WEIGHT, TANK_LIQUID_VOLUME, WATER_TANK_COUNT);
const mercuryTotalWeight = getWeight(MERCURY_WEIGHT, TANK_LIQUID_VOLUME, MERCURY_TANK_COUNT);

console.log(oilTotalWeight + waterTotalWeight + mercuryTotalWeight);

const getPower = function (num, exponent) {
    return exponent === 0 ? 1 : num * getPower(num, exponent - 1);
};

console.log(getPower(6, 3));
