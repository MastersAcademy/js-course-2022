const literInOneTank = 1000; // Liter in one tank
const OIL = 0.926; // (kg) Weight of 1 oil liter
const WATER = 1; // (kg) Weight of 1 water liter
const MERCURY = 1.355; // (kg) Weight of 1 mercury liter

// Count of tanks
const oilCount = 3;
const waterCount = 5;
const mercuryCount = 2;

// Get total weight of all tanks with same liquid
let oilTotalWeight;
let waterTotalWeight;
let mercuryTotalWeight;
let message;

function getWeight(weight, liquid, count) {
    switch (liquid) {
        case OIL:
            oilTotalWeight = weight * liquid * count;
            break;
        case WATER:
            waterTotalWeight = weight * liquid * count;
            break;
        case MERCURY:
            mercuryTotalWeight = weight * liquid * count;
            break;
        default:
            message = 'Incorrect value of liquid argument. Please use OIL or WATER or MERCURY';
    }
}

getWeight(literInOneTank, OIL, oilCount);
getWeight(literInOneTank, WATER, waterCount);
getWeight(literInOneTank, MERCURY, mercuryCount);

// Get total weight of all tanks
let totalWeight;

function getTotalWeight() {
    totalWeight = oilTotalWeight + waterTotalWeight + mercuryTotalWeight;
}

getTotalWeight();

// Show total weight of all tanks in console
if (Number.isNaN(totalWeight)) {
    console.log(message);
} else {
    console.log(`Total weight is ${totalWeight} kg`);
}
