const countBulksMercury = 2;
const countBulksWater = 5;
const countBulksOil = 3;
const bulkVolume = 1;
const oilDencity = 926;
const waterDencity = 1000;
const mercuryDencity = 13550;
function getWeight(weight, liquid, count) {
    return weight * liquid * count;
}
const mercuryWeight = getWeight(mercuryDencity, bulkVolume, countBulksMercury);
const waterWeight = getWeight(waterDencity, bulkVolume, countBulksWater);
const oilWeight = getWeight(oilDencity, bulkVolume, countBulksOil);
const totalWeight = mercuryWeight + waterWeight + oilWeight;
console.log(`Total amount = ${totalWeight} kg`);
function getExponent(basis, exponent) {
    if (exponent < 1) return 1;
    return basis * getExponent(basis, exponent - 1);
}
console.log(getExponent(6, 3));
