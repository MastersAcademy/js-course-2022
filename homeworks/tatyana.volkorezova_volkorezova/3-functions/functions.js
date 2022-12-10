const WATER_TANKER_COUNT = 5;
const OIL_TANKER_COUNT = 3;
const MERCURY_TANKER_COUNT = 2;

const WATER = 1000;
const OIL = 926;
const MERCURY = 1355;

let oilWeight;
let waterWeight;
let mercuryWeight;

function getWeight(weight, liquid, count) {
    switch (liquid) {
        case 'water':
            waterWeight = weight * count;
            break;
        case 'oil':
            oilWeight = weight * count;
            break;
        case 'mercury':
            mercuryWeight = weight * count;
            break;
        default:
            console.log('Not valid value of liquid. Acceptably value are use WATER/OIL/MERCURY');
    }
}

function getAllLiquidWeight(...args) {
    let sumOfWeight = 0;
    for (let i = 0; i <= args.length - 1; i++) {
        sumOfWeight += args[i];
    }
    return sumOfWeight;
}

getWeight(WATER, 'water', WATER_TANKER_COUNT);
getWeight(OIL, 'oil', OIL_TANKER_COUNT);
getWeight(MERCURY, 'mercury', MERCURY_TANKER_COUNT);

const totalWeight = getAllLiquidWeight(waterWeight, oilWeight, mercuryWeight);
console.log(`The total weight of arrived liquids is equal to: ${totalWeight} kilograms`);
