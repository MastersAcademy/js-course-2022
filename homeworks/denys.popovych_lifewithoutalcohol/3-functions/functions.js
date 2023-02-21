const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;
const weightParameter = 'kg';
const availableValuesWeight = '"kilogram", "kg", "кілограм", "кг", "ton", "t", "тона", "т", "gram", "gr", "грам", "гр"';
function getWeight(weight, liquid, count) {
    const weightLiquid = liquid * count;
    let nameLiquid;
    let totalWeight;
    switch (liquid) {
        case OIL:
            nameLiquid = 'oil';
            break;
        case WATER:
            nameLiquid = 'water';
            break;
        case MERCURY:
            nameLiquid = 'mercury';
            break;
        default:
            return console.log('the liquid is not entered correctly');
    }
    if (weight === 'kilogram' || weight === 'kg' || weight === 'кілограм' || weight === 'кг') {
        console.log(`Total weight of ${nameLiquid} is ${weightLiquid + weight}`);
        totalWeight = weightLiquid;
    } else if (weight === 'ton' || weight === 't' || weight === 'тона' || weight === 'т') {
        console.log(`Total weight of ${nameLiquid} is ${weightLiquid / 1000 + weight}`);
        totalWeight = weightLiquid / 1000;
    } else if (weight === 'gram' || weight === 'gr' || weight === 'грам' || weight === 'гр') {
        console.log(`Total weight of ${nameLiquid} is ${weightLiquid * 1000 + weight}`);
        totalWeight = weightLiquid * 1000;
    } else return console.log(`The measure of the weight of ${nameLiquid} is not entered correctly`);
    return totalWeight;
}
const oilWeight = getWeight(weightParameter, OIL, 3);
const waterWeight = getWeight(weightParameter, WATER, 5);
const mercuryWeight = getWeight(weightParameter, MERCURY, 2);

function getSummaryWeight() {
    return oilWeight + waterWeight + mercuryWeight;
}

const summaryWeight = getSummaryWeight();
if (summaryWeight) {
    console.log('The total weight of all liquids is', summaryWeight + weightParameter);
} else {
    console.log('Available values measure of the weight are:', availableValuesWeight);
}

console.log('==TASK WITH STAR==');

function exponentiation(baseExponent, exponent) {
    if (baseExponent !== +baseExponent) return console.log('The baseExponent is not a number');
    if (!(exponent % 1)) {
        if (exponent > 1) {
            return baseExponent * exponentiation(baseExponent, exponent - 1);
        }
        if (exponent === 0) {
            return baseExponent;
        }
        if (exponent < 0) {
            return 1 / (baseExponent * exponentiation(baseExponent, (exponent * -1) - 1));
        }
        return baseExponent;
    }
    return console.log('The exponent is not an integer');
}

console.log(exponentiation(10, -3));
