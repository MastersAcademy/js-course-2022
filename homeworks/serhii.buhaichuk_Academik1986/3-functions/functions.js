const totalWeightOneTank = 1000;
const OIL = 0.926;
const WATER = 1;
const MERCURY = 1.355;

const oilCount = 3;
const waterCount = 5;
const mercuryCount = 2;

const totaOilWeight = totalWeightOneTank * OIL * oilCount;
const totaWaterWeight = totalWeightOneTank * WATER * waterCount;
const totaMercuryWeight = totalWeightOneTank * MERCURY * mercuryCount;
const totalLiquid = totaOilWeight + totaWaterWeight + totaMercuryWeight;

function getTotalWeight() {
    return totalLiquid;
}

const getWeight = (weight, liquid, count) => {
    if (liquid) {
        return weight * liquid * count;
    }
    return `Загальна маса рідини: ${getTotalWeight()} кг`;
};

console.log(getWeight(totalWeightOneTank, OIL, oilCount));
console.log(getWeight(totalWeightOneTank, WATER, waterCount));
console.log(getWeight(totalWeightOneTank, MERCURY, mercuryCount));
console.log(getWeight(getTotalWeight()));
