const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const liquidValue = 1;

const oilCount = 3;
const waterCount = 5;
const mercuryCount = 2;

const getWeight = (weight, liquid, count) => {
    const resultWeightOfProduct = weight * liquid * count;
    return resultWeightOfProduct;
};

const getTotalWeight = () => {
    const oilWeight = getWeight(OIL, liquidValue, oilCount);
    const waterWeight = getWeight(WATER, liquidValue, waterCount);
    const mercuryWeight = getWeight(MERCURY, liquidValue, mercuryCount);
    const result = oilWeight + waterWeight + mercuryWeight;
    console.log(`Total weight of all products is ${result} kg`);
};

getTotalWeight();

// Завдання з зірочкою;

const getNumberInDegree = (num, deg) => {
    let result = num;
    if (deg === 1) {
        return result;
    }
    result = num * getNumberInDegree(num, deg - 1);
    return result;
};

console.log(getNumberInDegree(5, 4));
