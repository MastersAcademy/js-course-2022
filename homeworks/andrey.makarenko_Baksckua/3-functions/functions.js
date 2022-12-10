const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const numberOfTanksOil = 3;
const numberOfTanksWeter = 5;
const numberOfTanksMerkury = 2;

const calcSumOil = OIL * numberOfTanksOil;
const calcSumWeter = WATER * numberOfTanksWeter;
const calcSumMerkury = MERCURY * numberOfTanksMerkury;

const getWeight = function () {
    return calcSumOil + calcSumWeter + calcSumMerkury;
};
console.log(getWeight);
