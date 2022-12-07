// Weight of one tank
const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

// Count of tanks
const oilCount = 3;
const waterCount = 5;
const mercuryCount = 2;

// Get total weight of all tanks with same liquid
function getWeight(liquid, count) {
    return liquid * count;
}

const oilTotalWeight = getWeight(OIL, oilCount);
const waterTotalWeight = getWeight(WATER, waterCount);
const mercuryTotalWeight = getWeight(MERCURY, mercuryCount);

// Get total weight of all tanks
const totalWeight = () => oilTotalWeight + waterTotalWeight + mercuryTotalWeight;

console.log(`Total weight is ${totalWeight()} kg`);
