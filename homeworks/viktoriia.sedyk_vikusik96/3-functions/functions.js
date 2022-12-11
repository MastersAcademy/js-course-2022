const OIL_WEIGHT = 926;
const WATER_WEIGHT = 1000;
const MERCURY_WEIGHT = 1355;

const OIL_COUNT = 3;
const WATER_COUNT = 5;
const MERCURY_COUNT = 2;

const TANK_VOLUME = 1000;

const getWeight = (weight, liquid, count) => (liquid * count * weight) / 1000;

const totalOilWeight = getWeight(TANK_VOLUME, OIL_WEIGHT, OIL_COUNT);
const totalWaterWeight = getWeight(TANK_VOLUME, WATER_WEIGHT, WATER_COUNT);
const totalMercuryWeight = getWeight(TANK_VOLUME, MERCURY_WEIGHT, MERCURY_COUNT);

function calcTanksWeight(liquidFirst, liquidSecond, liquidThird) {
    return liquidFirst + liquidSecond + liquidThird;
}

calcTanksWeight(totalOilWeight, totalWaterWeight, totalMercuryWeight);

// second task

function getExponentiation(num, pow) {
    let res = 0;
    function exponentiation(number, power) {
        if (power === 1) {
            return res;
        }
        res = number * num;
        return exponentiation(res, power - 1);
    }
    return exponentiation(num, pow);
}

console.log(getExponentiation(2, 4));
