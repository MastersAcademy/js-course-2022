const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const getWeight = (weight, liquid, count) => (weight / 1000) * liquid * count;

const mercuryWeight = getWeight(MERCURY, 1000, 2);
const waterWeight = getWeight(WATER, 1000, 5);
const oilWeight = getWeight(OIL, 1000, 3);

console.log(`Маса рідин, що прибули на станцію: ${mercuryWeight + waterWeight + oilWeight}`);
