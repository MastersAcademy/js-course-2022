const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const weightOfOilTanker = 926;
const weightOfWaterTanker = 1000;
const weightOfMercuryTanker = 1355;

const amountOfOilTanker = 3;
const amountOfWaterTanker = 5;
const amountOfMercuryTanker = 2;

function getWeightOil(weightOfOilTanker, liquid, amountOfOilTanker) {
    if (liquid === OIL) {
        return weightOfOilTanker * amountOfOilTanker;
    }
    return 'Enter liquid';
};
console.log(getWeightOil(weightOfOilTanker, OIL, amountOfOilTanker));

function getWeightWater(weightOfWaterTanker, liquid, amountOfWaterTanker) {
    if (liquid === WATER) {
        return weightOfWaterTanker * amountOfWaterTanker;
    }
    return 'Enter liquid';
};
console.log(getWeightWater(weightOfWaterTanker, WATER, amountOfWaterTanker));

function getWeightMercury(weightOfMercuryTanker, liquid, amountOfMercuryTanker) {
    if (liquid === MERCURY) {
        return weightOfMercuryTanker * amountOfMercuryTanker;
    }
    return 'Enter liquid';
};
console.log(getWeightMercury(weightOfMercuryTanker, MERCURY, amountOfMercuryTanker));

function getWeightTotalLiquid() {
    return `Загальна маса рідини: ${OIL * 3 + WATER * 5 + MERCURY * 2}`;
}
console.log(getWeightTotalLiquid());
