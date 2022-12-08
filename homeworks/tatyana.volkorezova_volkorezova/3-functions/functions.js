// count of each tanker
const WATER_TANKER_COUNT = 5;
const OIL_TANKER_COUNT = 3;
const MERCURY_TANKER_COUNT = 2;

// weight of one tanker (in kg)
const TANKER_WEIGHT = 1;

// specific weight of each type of liquid on each 1000 liters (pytoma weight in kg)
const WATER = 1000;
const OIL = 926;
const MERCURY = 1355;

// function for getting weight of specific type of liquid
function getWeight(weight, liquid, count) {
    return weight * liquid * count;
}

// function for getting total weight of arrived tankers
function getAllLiquidWeight(...args) {
    let sumOfWeight = 0;
    for (let i = 0; i <= args.length - 1; i++) {
        sumOfWeight += args[i];
    }
    return sumOfWeight;
}

const weightOfWater = getWeight(TANKER_WEIGHT, WATER, WATER_TANKER_COUNT);
const weightOfOil = getWeight(TANKER_WEIGHT, OIL, OIL_TANKER_COUNT);
const weightOfMercury = getWeight(TANKER_WEIGHT, MERCURY, MERCURY_TANKER_COUNT);

const totalWeight = getAllLiquidWeight(weightOfWater, weightOfOil, weightOfMercury);
console.log(`The total weight of arrived liquids is equal to: ${totalWeight} kilograms`);
