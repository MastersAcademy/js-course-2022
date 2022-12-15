const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;
const quantity2 = 2;
const quantity5 = 5;
const quantity3 = 3;

function getWeight({ volume, liquid, count }) {
    const coefficient = (volume / 1000) * count;
    if (liquid === 'mercury') {
        return coefficient * MERCURY;
    }
    if (liquid === 'water') {
        return coefficient * WATER;
    }
    return coefficient * OIL;
}

const bars = [
    { volume: 1000, liquid: 'mercury', count: quantity2 },
    { volume: 1000, liquid: 'water', count: quantity5 },
    { volume: 1000, liquid: 'oil', count: quantity3 },
];

const getAWeight = () => bars.reduce((accumulator, tank) => accumulator + getWeight(tank), 0);

console.log('All tank: ', getAWeight());

// extraTask
function pow(base, expo) {
    if (expo === 0) { return 1; } return base * pow(base, expo - 1);
}
console.log(pow(5, 2));
