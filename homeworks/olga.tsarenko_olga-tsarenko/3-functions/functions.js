const oilCount = 3;
const waterCount = 5;
const mercuryCount = 2;
const tankWeight = {};
let totalWeightLiquids = 0;
const LIQUIDS = {
    WATER: {
        name: 'water',
        weight: 1000,
    },
    OIL: {
        name: 'oil',
        weight: 926,
    },
    MERCURY: {
        name: 'mercury',
        weight: 1355,
    },
};

const getWeight = (weight, liquid, count) => {
    tankWeight[liquid] = weight * count;
};

getWeight(LIQUIDS.OIL.weight, LIQUIDS.OIL.name, oilCount);
getWeight(LIQUIDS.WATER.weight, LIQUIDS.WATER.name, waterCount);
getWeight(LIQUIDS.MERCURY.weight, LIQUIDS.MERCURY.name, mercuryCount);

Object.values(tankWeight).forEach((weight) => { totalWeightLiquids += weight; });

console.log(tankWeight);
console.log(`The total weight of liquids is ${totalWeightLiquids} kg`);

// Рекурсія піднесення до степеня
const exponentiation = (num, exp) => {
    if (exp === 1) {
        return num;
    }
    return num * exponentiation(num, exp - 1);
};

console.log(`The result of exponentiation is  ${exponentiation(2, 3)}`);
