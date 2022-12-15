const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const volume = 1; // 1000 l

const oilCount = 3;
const waterCount = 5;
const mercuryCount = 2;

const getWeight = (weight, liquid, count) => weight * liquid * count;

const oilWeight = getWeight(OIL, volume, oilCount);
const waterWeight = getWeight(WATER, volume, waterCount);
const mercuryWeight = getWeight(MERCURY, volume, mercuryCount);

const totalAllWeight = oilWeight + waterWeight + mercuryWeight;

console.log(`The weight of all wagons is equal ${totalAllWeight} kg.`);
