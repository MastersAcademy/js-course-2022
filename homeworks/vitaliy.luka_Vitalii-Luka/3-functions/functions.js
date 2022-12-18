/*
Homework 3 - Functions
 */
const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const OIL_TANK = 3;
const WATER_TANK = 5;
const MERCURY_TANK = 2;

let totalCount = null;
function getWeight(weight, liquid, count) {
    totalCount = weight * liquid + count;
    return totalCount;
}

function getTotalWeight() {
    if (totalCount === null) {
        getWeight(OIL, OIL_TANK, totalCount);
        getWeight(WATER, WATER_TANK, totalCount);
        getWeight(MERCURY, MERCURY_TANK, totalCount);
        console.log(`Total mass of liquids: ${totalCount} kg`);
    } else {
        console.log('Something went wrong.....');
    }
}

getTotalWeight();
