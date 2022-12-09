const oilWeight = 926;
const waterWeight = 1000;
const mercuryWeight = 1355;
const productVolume = 1000;
const oilCount = 3;
const waterCount = 5;
const mercuryCount = 2;

const getWeight = (weight, liquid, count) => {
    const result = (weight * liquid * count) / 1000;
    return result;
};

const oilTotalWeight = getWeight(oilWeight, productVolume, oilCount);
const waterTotalWeight = getWeight(waterWeight, productVolume, waterCount);
const mercuryTotalWeight = getWeight(mercuryWeight, productVolume, mercuryCount);

const getTotalWeight = () => {
    const result = oilTotalWeight + waterTotalWeight + mercuryTotalWeight;
    return result;
};

const totalWeight = getTotalWeight();
console.log(`Total weight of all products is ${totalWeight} kg`);

// Завдання з зірочкою;

const getNumberInDegree = (num, deg) => {
    let result = num;
    if (deg !== 1) {
        result = num * getNumberInDegree(num, deg - 1);
        return result;
    }
    return result;
};

console.log(getNumberInDegree(5, 3));
