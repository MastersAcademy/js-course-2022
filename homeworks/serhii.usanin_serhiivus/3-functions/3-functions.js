const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

function getWeight(liquid, count) {
    const liquidLowerCase = liquid.toLowerCase();
    let result;
    switch (liquidLowerCase) {
        case 'water':
            result = WATER;
            break;
        case 'oil':
            result = OIL;
            break;
        case 'mercury':
            result = MERCURY;
            break;
        default:
            console.log(`Unknown liquid: ${liquid} Weight is undefined`);
            return 0;
    }
    return result * count;
}

console.log(getWeight('Oil', 3) + getWeight('Water', 5) + getWeight('Mercury', 2));
