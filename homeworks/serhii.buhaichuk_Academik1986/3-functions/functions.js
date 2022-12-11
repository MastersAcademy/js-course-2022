const oneCistern = 1000;
const OIL = 0.926;
const WATER = 1;
const MERCURY = 1.355;

const oilCount = 3;
const waterCount = 5;
const mercuryCount = 2;

let totaOilWeight = oneCistern * OIL * oilCount;
let totaWaterWeight = oneCistern * WATER * waterCount;
let totaMercuryWeight = oneCistern * MERCURY * mercuryCount;
let totalLiquid = totaOilWeight + totaWaterWeight + totaMercuryWeight;

const getWeight = (weight, liquid, count) => {
    if (liquid) {
        return weight * liquid * count;
    }
    return `Загальна маса рідини: ${getTotalWeight()} кг`;
};

function getTotalWeight() {
    return totalLiquid;
};

console.log(getWeight(oneCistern, OIL, oilCount));
console.log(getWeight(oneCistern, WATER, waterCount));
console.log(getWeight(oneCistern, MERCURY, mercuryCount));
console.log(getWeight(getTotalWeight()));
