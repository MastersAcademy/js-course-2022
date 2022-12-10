const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

function getWeight(weight, liquid, count) {

    let value;

    if (liquid === OIL) {
        value = weight * count;
    }

    else if (liquid === WATER) {
        value = weight * count;
    }

    else if(liquid === MERCURY) {
        value = weight * count;
    }
    
    else {
        console.log('Error...');
    }

    return value;
};

function calculateWeight() {
    return getWeight(926, OIL, 3) + getWeight(1000, WATER, 5) + getWeight(1355, MERCURY, 2);
}

console.log(calculateWeight(OIL, WATER, MERCURY));
