const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const liquids = ['oil', 'water', 'mercury'];

function getWeight(weight, liquid, count) {
    return weight * count;
}

const sumOfWeights = getWeight(OIL, liquids[0], 3) + getWeight(WATER, liquids[1], 5) + getWeight(MERCURY, liquids[2], 2);
console.log(`The weight of all liquids is equal to ${sumOfWeights}`);

const number = 2;
const power = 5;

function getResultOfPower(number, power){
    if (power === 0)
        return 1;
    else
        return number * getResultOfPower(number, --power);
}

const result = getResultOfPower(number, power);
console.log(result);
