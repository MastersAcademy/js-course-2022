const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const weightOfOilTanker = 926;
const weightOfWaterTanker = 1000;
const weightOfMercuryTanker = 1355;

const amountWagonOil = 3;
const amountWagonWater = 5;
const amountWagonMercury = 2;

const getWeightOil = (weightOfOilTanker, liquid, amountWagonOil) => {
    if (liquid === OIL) {
        return weightOfOilTanker * amountWagonOil;
    }
    return 'Enter liquid';
};
console.log(getWeightOil(weightOfOilTanker, OIL, amountWagonOil));

const getWeightWater = (weightOfWaterTanker, liquid, amountWagonWater) => {
    if (liquid === WATER) {
        return weightOfWaterTanker * amountWagonWater;
    }
    return 'Enter liquid';
};
console.log(getWeightWater(weightOfWaterTanker, WATER, amountWagonWater));

const getWeightMercury = (weightOfMercuryTanker, liquid, amountWagonMercury) => {
    if (liquid === MERCURY) {
        return weightOfMercuryTanker * amountWagonMercury;
    }
    return 'Enter liquid';
};
console.log(getWeightMercury(weightOfMercuryTanker, MERCURY, amountWagonMercury));

function getWeightTotalLiquid() {
    return `Загальна маса рідини: ${OIL * 3 + WATER * 5 + MERCURY * 2}`;
}
console.log(getWeightTotalLiquid());
