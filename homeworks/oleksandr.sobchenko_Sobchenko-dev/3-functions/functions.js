const barrelVolume = 1000;

const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const oilLiquid = OIL / 1000;
const waterLiquid = WATER / 1000;
const mercuryLiquid = MERCURY / 1000;

const oilCount = 3;
const waterCount = 5;
const mercuryCount = 2;

// Визначення ваги одного типу рідини має бути реалізовано викликом функції getWeight
// аргументами якої будуть weight, liquid, count.
function getWeight(weight, liquid, count) {
    return weight * liquid * count;
}
const totalWaightOil = getWeight(barrelVolume, oilLiquid, oilCount);
const totalWaightWater = getWeight(barrelVolume, waterLiquid, waterCount);
const totalWaightMarcury = getWeight(barrelVolume, mercuryLiquid, mercuryCount);
const totalTankWeight = totalWaightMarcury + totalWaightOil + totalWaightWater;
console.log(totalTankWeight);
