const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const volume = 1000;
const numberOfTanksOil = 3;
const numberOfTanksWeter = 5;
const numberOfTanksMerkury = 2;

function getWeight(weight, liquid, count) {
    return weight * liquid * count;
}

const oilWeight = getWeight(volume, OIL, numberOfTanksOil);
const weterWeght = getWeight(volume, WATER, numberOfTanksWeter);
const mercuryWeght = getWeight(volume, MERCURY, numberOfTanksMerkury);

console.log(oilWeight + weterWeght + mercuryWeght);
