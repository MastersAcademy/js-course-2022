// оголошення констант

const WEIGHT_OIL = 926;
const WEIGHT_WATER = 1000;
const WEIGHT_MERCURY = 1355;
const TANK_VOLUME = 1; // одна тисяча літрів

// оголошення змінних
const countTanksOil = 3;
const countTanksWater = 5;
const countTanksMercury = 2;

// оголошення функції

// -----------Function Declaration---------------

// function getWeight(weight, liquid, count) {
//     return weight * liquid * count;
// }
// -----------Function Expression---------------

// const getWeight = function (weight, liquid, count) {
//     return weight * liquid * count;
// };
// -------------Стрілкова функція------------------

const getWeight = (weight, liquid, count) => weight * liquid * count;

// виклик функції

const massOil = getWeight(WEIGHT_OIL, TANK_VOLUME, countTanksOil);
const massWater = getWeight(WEIGHT_WATER, TANK_VOLUME, countTanksWater);
const massMercury = getWeight(WEIGHT_MERCURY, TANK_VOLUME, countTanksMercury);
const totalMass = massOil + massWater + massMercury;

console.log(`Загальна масса = ${totalMass} кг. \n масса олії = ${massOil} кг. \n маса води = ${massWater} кг. \n маса ртуті = ${massMercury}`);

// --------------Завдання з зірочкою------------------
const calcPOW = function (num, step) {
    if (step === 1) {
        return num;
    }
    return num * calcPOW(num, step - 1);
};

console.log('результат піднесення до степеня', calcPOW(5, 3));
