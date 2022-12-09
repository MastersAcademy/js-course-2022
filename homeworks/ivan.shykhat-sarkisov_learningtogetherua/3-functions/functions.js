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

// Змінна для першого варіанту обчислення суми трьох рідин
let summaryWeight = 0;

// Ініціалізація функції
function getWeight(weight, liquid, count) {
    // Обчислення маси одного типу рідини
    const oneTypeLiquidWeight = (weight / 1000) * liquid * count;
    return oneTypeLiquidWeight;
}

// Перший варіант накопичення даних про вагу всіх рідин
summaryWeight += getWeight(OIL, oilTankVol, oilTankQuantity);
summaryWeight += getWeight(WATER, waterTankVol, waterTankQuantity);
summaryWeight += getWeight(MERCURY, mercuryTankVol, mercuryTankQuantity);

// Другий варіант накопичення даних про вагу всіх рідин
// [Для коректного виконання коментуємо рядок let summaryLiquidWeight = 0 ]
// const oilLiquidWeight = getWeight(OIL, oilTankVol, oilTankQuantity);
// const waterLiquidWeight = getWeight(WATER, waterTankVol, waterTankQuantity);
// const mercuryLiquidWeight=getWeight(MERCURY,mercuryTankVol, mercuryTankQuantity)

// const summaryWeight = oilLiquidWeight + waterLiquidWeight + mercuryLiquidWeight;

// Вивід загальної ваги рідин всіх типів
console.log(summaryWeight);
