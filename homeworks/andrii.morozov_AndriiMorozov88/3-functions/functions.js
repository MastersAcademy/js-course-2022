const countBulksMercury = 2;
const countBulksWater = 5;
const countBulksOil = 3;
const bulkVolume = 1;
const oilDencity = 926;
const waterDencity = 1000;
const mercuryDencity = 13550;
function getWeight(weight, liquid, count) {
  return weight * liquid * count
}
const totalWeight = getWeight(oilDencity, bulkVolume, countBulksOil) + getWeight(mercuryDencity, bulkVolume, countBulksMercury) + getWeight(waterDencity, bulkVolume, countBulksWater);
console.log(`Total amount = ${totalWeight}`);

