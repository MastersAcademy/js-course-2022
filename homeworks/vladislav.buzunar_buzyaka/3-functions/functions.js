const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const numOilBank = 3;
const numWaterBank = 5;
const numMercuryBank = 2;

function getWeight(weight, amount) {
    return weight * amount;
}

const totalWeightOil = getWeight(OIL, numOilBank);
const totalWeightWater = getWeight(WATER, numWaterBank);
const totalWeightMercury = getWeight(MERCURY, numMercuryBank);

console.log(`The total weight of the oil came to the port = ${totalWeightOil}(kg)`);
console.log(`The total weight of the water came to the port = ${totalWeightWater}(kg)`);
console.log(`The total weight of the mercury came to the port = ${totalWeightMercury}(kg)`);

function totalWeight() {
    const allWeight = totalWeightOil + totalWeightWater + totalWeightMercury;
    return allWeight;
}

console.log(`Total weight of liquids that arrived at the port = ${totalWeight()}(kg)`);
