const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

let weightOfOilTanker = 926;
let weightOfWaterTanker = 1000;
let weightOfMercuryTanker = 1355;

let amountOfOilTanker = 3;
let amountOfWaterTanker = 5;
let amountOfMercuryTanker = 2;

const getWeightOil = (weightOfOilTanker, liquid, amountOfOilTanker) => {
    if (liquid === OIL) {
        return weightOfOilTanker * amountOfOilTanker;
    }
};
console.log(getWeightOil(weightOfOilTanker, OIL, amountOfOilTanker));

const getWeightWater = (weightOfWaterTanker, liquid, amountOfWaterTanker) => {
    if (liquid === WATER) {
        return weightOfWaterTanker * amountOfWaterTanker;
    }
};
console.log(getWeightWater(weightOfWaterTanker, WATER, amountOfWaterTanker));

const getWeightMercury = (weightOfMercuryTanker, liquid, amountOfMercuryTanker) => {
    if (liquid === MERCURY) {
        return weightOfMercuryTanker * amountOfMercuryTanker;
    }
};
console.log(getWeightMercury(weightOfMercuryTanker, MERCURY, amountOfMercuryTanker));

const getWeightTotalLiquid = () => {
    return `Загальна маса рідини: ${OIL * 3 + WATER * 5 + MERCURY * 2}`;
};
console.log(getWeightTotalLiquid());
