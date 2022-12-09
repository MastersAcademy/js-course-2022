console.clear();

const countOfOil = 3;
const countOfWater = 5;
const countOfMercury = 2;

const weightOfOIL = 926;
const weightOfWATER = 1000;
const weightOfMERCURY = 1355;

function getWeight(weight, liquid, count) {
    return weight * liquid * count;
}

const weightOfWater = getWeight(weightOfWATER, 1, countOfWater);
const weightOfOil = getWeight(weightOfOIL, 1, countOfOil);
const weightOfMercury = getWeight(weightOfMERCURY, 1, countOfMercury);

const sumOfWeight = weightOfWater + weightOfOil + weightOfMercury;

console.log('Summary weight is equal to: ', sumOfWeight);

function exp(number, numOfExp) { // task with *
    if (numOfExp === 0) {
        return 1;
    }
    return number * exp(number, numOfExp - 1);
}
console.log('\nResult of exponential function: ', exp(2, 5));
