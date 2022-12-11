const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const LIQUID_OIL = 'oil';
const LIQUID_WATER = 'water';
const LIQUID_MERCUTY = 'mercury';

const NUMBER_OF_OIL_TANKS = 3;
const NUMBER_OF_WATER_TANKS = 5;
const NUMBER_OF_MERCURY_TANKS = 2;

function getWeight(weight, liquid, count) {
    const value = weight * count;
    console.log(`Total ${liquid} weight = ${value}`);
    return value;
}

function calculateWeight() {
    const TOTAL_WEIGHT_OF_OIL = getWeight(OIL, LIQUID_OIL, NUMBER_OF_OIL_TANKS);
    const TOTAL_WEIGHT_OF_WATER = getWeight(WATER, LIQUID_WATER, NUMBER_OF_WATER_TANKS);
    const TOTAL_WEIGHT_OF_MERCURY = getWeight(MERCURY, LIQUID_MERCUTY, NUMBER_OF_MERCURY_TANKS);

    return TOTAL_WEIGHT_OF_OIL + TOTAL_WEIGHT_OF_WATER + TOTAL_WEIGHT_OF_MERCURY;
}

console.log(calculateWeight());
