const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const NUMBER_OF_OIL_TANKS = 3;
const NUMBER_OF_WATER_TANKS = 5;
const NUMBER_OF_MERCURY_TANKS = 2;

const LIQUID_OIL = 'oil';
const LIQUID_WATER = 'water';
const LIQUID_MERCUTY = 'mercury';

function getWeight(weight, liquid, count) {
    const value = weight * count;
    console.log(`Total ${liquid} weight = ${value}`);
    return value;
}

function calculateWeight() {
    return getWeight(OIL, LIQUID_OIL, NUMBER_OF_OIL_TANKS) + getWeight(WATER, LIQUID_WATER, NUMBER_OF_WATER_TANKS) + getWeight(MERCURY, LIQUID_MERCUTY, NUMBER_OF_MERCURY_TANKS);
}

console.log("total weight of all liquids = " + calculateWeight(OIL, WATER, MERCURY));
