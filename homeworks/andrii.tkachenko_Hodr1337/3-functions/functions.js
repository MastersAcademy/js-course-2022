const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const OILquantity = 3;
const WATERquantity = 5;
const MERCURYquantity = 2;

function operation(weight, liquid) {
    return weight * liquid;
}

function getWeight(weight, liquid, count) {
    return count(weight, liquid);
}

const totalWeight = getWeight(OIL, OILquantity, operation)
+ getWeight(WATER, WATERquantity, operation) + getWeight(MERCURY, MERCURYquantity, operation);
console.log(totalWeight);
