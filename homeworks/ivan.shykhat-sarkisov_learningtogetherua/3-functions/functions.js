// стартові дані
const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const oilTankQuantity = 3;
const waterTankQuantity = 5;
const mercuryTankQuantity = 2;

const oilTankVol = 1000;
const waterTankVol = 1000;
const mercuryTankVol = 1000;

// Ініціалізація функції
function getWeight(weight, liquid, count) {
    // Повернення маси одного типу рідини
    return (weight / 1000) * liquid * count;
}

// Змінна для обчислення суми трьох рідин
let summaryWeight = 0;

// Накопичення даних про вагу всіх рідин
summaryWeight += getWeight(OIL, oilTankVol, oilTankQuantity);
summaryWeight += getWeight(WATER, waterTankVol, waterTankQuantity);
summaryWeight += getWeight(MERCURY, mercuryTankVol, mercuryTankQuantity);

console.log(summaryWeight);
