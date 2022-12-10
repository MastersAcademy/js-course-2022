const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;
const countOil = 3;
const countWater = 5;
const countMercury = 2;
let totalOilWeight = 0;
let totalWaterWeight = 0;
let totalMercuryWeight = 0;

function getWeight(weight, liquid, count) {
    if (liquid === 'OIL') {
        totalOilWeight = weight * count;
    } else if (liquid === 'WATER') {
        totalWaterWeight = weight * count;
    } else if (liquid === 'MERCURY') {
        totalMercuryWeight = weight * count;
    } else {
        console.log('Error');
    }
}

getWeight(OIL, 'OIL', countOil);
getWeight(WATER, 'WATER', countWater);
getWeight(MERCURY, 'MERCURY', countMercury);

console.log(`Oil Weight: ${totalOilWeight}`);
console.log(`Water Weight: ${totalWaterWeight}`);
console.log(`Mercury Weight: ${totalMercuryWeight}`);

function getTotalWeight(firstWeight, secondWeight, thirdWeight) {
    return (firstWeight + secondWeight + thirdWeight);
}

const totalWeight = getTotalWeight(totalOilWeight, totalWaterWeight, totalMercuryWeight);

console.log(`Total mass of liquids: ${totalWeight}`);
