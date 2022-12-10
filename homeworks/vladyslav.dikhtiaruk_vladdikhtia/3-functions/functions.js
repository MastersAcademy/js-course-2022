console.clear();

const countOfOil = 3;
const countOfWater = 5;
const countOfMercury = 2;

const weightOfOil = 926;
const weightOfWater = 1000;
const weightOfMercury = 1355;

function getWeight(weight, liquid, count) {
    return weight * liquid * count;
}

const totalWater = getWeight(weightOfWater, 1, countOfWater);
const totalOil = getWeight(weightOfOil, 1, countOfOil);
const totalMercury = getWeight(weightOfMercury, 1, countOfMercury);

const sumOfWeight = totalWater + totalOil + totalMercury;

console.log('Summary weight is equal to: ', sumOfWeight);

function exp(number, numOfExp) { // task with *
    if (numOfExp === 0) {
        return 1;
    }
    return number * exp(number, numOfExp - 1);
}
console.log('\nResult of exponential function: ', exp(2, 5));
