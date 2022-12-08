const literInOneTank = 1000; // Liter in one tank
const OIL = 0.926; // (kg) Weight of 1 oil liter
const WATER = 1; // (kg) Weight of 1 water liter
const MERCURY = 1.355; // (kg) Weight of 1 mercury liter

// Count of tanks
const oilCount = 3;
const waterCount = 5;
const mercuryCount = 2;

// Get total weight of all tanks with same liquid
function getWeight(weight, liquid, count) {
    return weight * liquid * count;
}

const oilTotalWeight = getWeight(literInOneTank, OIL, oilCount);
const waterTotalWeight = getWeight(literInOneTank, WATER, waterCount);
const mercuryTotalWeight = getWeight(literInOneTank, MERCURY, mercuryCount);

// Get total weight of all tanks
const totalWeight = () => oilTotalWeight + waterTotalWeight + mercuryTotalWeight;

console.log(`Total weight is ${totalWeight()} kg`);
