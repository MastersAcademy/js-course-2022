const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;
const countOil = 3;
const countWater = 5;
const countMercury = 2;
const volumeTank = 1000;

function getWeight(weight, liquid, count) {
    return (weight * liquid * count);
}

const oilWeight = getWeight(OIL, volumeTank, countOil);
const waterWeight = getWeight(WATER, volumeTank, countWater);
const mercuryWeight = getWeight(MERCURY, volumeTank, countMercury);

console.log(`Oil Weight: ${oilWeight}`);
console.log(`Water Weight: ${waterWeight}`);
console.log(`Mercury Weight: ${mercuryWeight}`);

function getTotalWeight(firstWeight, secondWeight, thirdWeight) {
    return (firstWeight + secondWeight + thirdWeight);
}

const totalWeight = getTotalWeight(oilWeight, waterWeight, mercuryWeight);

console.log(`Total mass of liquids: ${totalWeight}`);
