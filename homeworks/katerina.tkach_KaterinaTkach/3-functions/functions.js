const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;
// eslint-disable-next-line consistent-return
const getWeight = ({ volume, liquid, count }) => {
    console.log('weig');
    const coef = (volume / 1000) * count;
    if (liquid === 'mercury') return coef * MERCURY;
    if (liquid === 'water') return coef * WATER;
    if (liquid === 'oil') return coef * OIL;
};
// eslint-disable-next-line max-len
const getAllWeight = (tanks) => tanks.reduce((accumulator, tank) => accumulator + getWeight(tank), 0);
const tanks = [{ volume: 1000, liquid: 'mercury', count: 2 },
    { volume: 1000, liquid: 'water', count: 5 },
    { volume: 1000, liquid: 'oil', count: 3 }];

console.log(getAllWeight(tanks));
