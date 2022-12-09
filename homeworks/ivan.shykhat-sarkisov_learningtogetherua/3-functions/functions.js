// стартові дані
const oil1KLitersWeight = 926;
const water1KLitersWeight = 1000;
const mercury1KLitersWeight = 1355;

const oilTankQuantity = 3;
const waterTankQuantity = 5;
const mercuryTankQuantity = 2;

const oilTankVolume = 1000;
const waterTankVolume = 1000;
const mercuryTankVolume = 1000;

// Змінна для першого варіанту обчислення суми трьох рідин
let summaryWeight = 0;

// Ініціалізація функції
function getWeight(weight, liquid, count) {
    // Обчислення маси одного типу рідини
    const oneTypeLiquidWeight = (weight / 1000) * liquid * count;
    return oneTypeLiquidWeight;
}

// Перший варіант накопичення даних про вагу всіх рідин
summaryWeight += getWeight(oil1KLitersWeight, oilTankVolume, oilTankQuantity);
summaryWeight += getWeight(water1KLitersWeight, waterTankVolume, waterTankQuantity);
summaryWeight += getWeight(mercury1KLitersWeight, mercuryTankVolume, mercuryTankQuantity);

// Другий варіант накопичення даних про вагу всіх рідин
// [Для коректного виконання коментуємо рядок let summaryLiquidWeight = 0 ]
// const oilLiquidWeight = getWeight(oil1KLitersWeight, oilTankVolume, oilTankQuantity);
// const waterLiquidWeight = getWeight(water1KLitersWeight, waterTankVolume, waterTankQuantity);
// const mercuryLiquidWeight = getWeight(mercury1KLitersWeight, mercuryTankVolume, mercuryTankQuantity);

// const summaryWeight = oilLiquidWeight + waterLiquidWeight + mercuryLiquidWeight;

// Вивід загальної ваги рідин всіх типів
console.log(summaryWeight);
