const oilDencity = 926;
const waterDencity = 1000;
const mercuryDencity = 1355;
const tankVolume = 1;
const oilTankQuantity = 3;
const waterTankQuantity = 5;
const mercuryTankQuantity = 2;

function getWeight(weight, liquid, count) {
    return weight * liquid * count;
}

const oilWeight = getWeight(oilDencity, tankVolume, oilTankQuantity);
const waterWeight = getWeight(waterDencity, tankVolume, waterTankQuantity);
const mercuryWeight = getWeight(mercuryDencity, tankVolume, mercuryTankQuantity);
const totalWeight = oilWeight + waterWeight + mercuryWeight;

console.log(`Weight of oil = ${oilWeight} kg`);
console.log(`Weight of water = ${waterWeight} kg`);
console.log(`Weight of mercury = ${mercuryWeight} kg`);
console.log(`Total weight = ${totalWeight} kg`);

function getExponent(baseOfDegree, exponent) {
    if (baseOfDegree < 1) return 1;
    return baseOfDegree * getExponent(baseOfDegree, exponent - 1);
}
console.log(getExponent(2, 3));
