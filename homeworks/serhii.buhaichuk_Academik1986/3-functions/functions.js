const OIL = 926;
const getWeightOil = (weightOfOilTanker, liquid, amountWagonOil) => {
    if (liquid === OIL) {
        return weightOfOilTanker * amountWagonOil;
    }
    return 'Enter liquid';
};
const weightOfOilTanker = 926;
const amountWagonOil = 3;
console.log(getWeightOil(weightOfOilTanker, OIL, amountWagonOil));

const WATER = 1000;
const getWeightWater = (weightOfWaterTanker, liquid, amountWagonWater) => {
    if (liquid === WATER) {
        return weightOfWaterTanker * amountWagonWater;
    }
    return 'Enter liquid';
};
const weightOfWaterTanker = 1000;
const amountWagonWater = 5;
console.log(getWeightWater(weightOfWaterTanker, WATER, amountWagonWater));

const MERCURY = 1355;
const getWeightMercury = (weightOfMercuryTanker, liquid, amountWagonMercury) => {
    if (liquid === MERCURY) {
        return weightOfMercuryTanker * amountWagonMercury;
    }
    return 'Enter liquid';
};
const weightOfMercuryTanker = 1355;
const amountWagonMercury = 2;
console.log(getWeightMercury(weightOfMercuryTanker, MERCURY, amountWagonMercury));

function getWeightTotalLiquid() {
    return `Загальна маса рідини: ${OIL * 3 + WATER * 5 + MERCURY * 2}`;
}
console.log(getWeightTotalLiquid());
