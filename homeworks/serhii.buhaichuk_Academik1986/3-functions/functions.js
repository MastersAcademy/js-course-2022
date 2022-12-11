const totalWeightOneTank = 1000;
const oilTanker = 0.926;
const waterTanker = 1;
const mercuryTanker = 1.355;

const oilCount = 3;
const waterCount = 5;
const mercuryCount = 2;

const totaOilWeight = totalWeightOneTank * oilTanker * oilCount;
const totaWaterWeight = totalWeightOneTank * waterTanker * waterCount;
const totaMercuryWeight = totalWeightOneTank * mercuryTanker * mercuryCount;
const totalLiquid = totaOilWeight + totaWaterWeight + totaMercuryWeight;

const getWeight = (weight, liquid, count) => {
    if (liquid) {
        return weight * liquid * count;
    }
    return `Загальна маса рідини: ${totalLiquid}`;
};

console.log(getWeight(totalWeightOneTank, oilTanker, oilCount));
console.log(getWeight(totalWeightOneTank, waterTanker, waterCount));
console.log(getWeight(totalWeightOneTank, mercuryTanker, mercuryCount));
console.log(getWeight());