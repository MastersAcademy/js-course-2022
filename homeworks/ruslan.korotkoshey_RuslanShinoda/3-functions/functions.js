const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;
let weightOil = 0;
let weightWater = 0;
let weightMercury = 0;

function getWeight(weight, liquid, count) {
    if (liquid === OIL) {
        weightOil = weight * count;
    } else if (liquid === WATER) {
        weightWater = weight * count;
    } else if (liquid === MERCURY) {
        weightMercury = weight * count;
    } else {
        console.log('There is no such liquid');
    }
    return weightOil && weightWater && weightMercury;
}

getWeight(926, OIL, 3);
getWeight(1000, WATER, 5);
getWeight(1355, MERCURY, 2);

function totalWeight() {
    return weightOil + weightWater + weightMercury;
}

console.log('The total mass of liquids has arrived to the station: ', totalWeight());
