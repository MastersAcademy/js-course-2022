// стартові дані
const oil1KLitersWeight = 926;
const water1KLitersWeight = 1000;
const mercury1KLitersWeight = 1355;

const oilTankWagonQuantity = 3;
const waterTankWagonQuantity = 5;
const mercuryTankWagonQuantity = 2;

const oilTankWagonVolume = 1000;
const waterTankWagonVolume = 1000;
const mercuryTankWagonVolume = 1000;

// Змінна для першого варіанту обчислення суми трьох рідин
let summaryWeight = 0;

// Ініціалізація функції
function getWeight(weight, liquid, count) {
    // Обчислення маси одного типу рідини
    const oneTypeLiquidWeight = (weight / 1000) * liquid * count;
    return oneTypeLiquidWeight;
}

// Перший варіант накопичення даних про вагу всіх рідин
summaryWeight += getWeight(oil1KLitersWeight, oilTankWagonVolume, oilTankWagonQuantity);
summaryWeight += getWeight(water1KLitersWeight, waterTankWagonVolume, waterTankWagonQuantity);
summaryWeight += getWeight(mercury1KLitersWeight, mercuryTankWagonVolume, mercuryTankWagonQuantity);

// Другий варіант накопичення даних про вагу всіх рідин [Для коректного виконання необхідно закоментувати вище рядок let summaryLiquidWeight = 0 ]
// const oilLiquidWeight = getWeight(oilThousandLitersWeight, oilTankWagonVolume, oilTankWagonQuantity);
// const waterLiquidWeight = getWeight(waterThousandLitersWeight, waterTankWagonVolume, waterTankWagonQuantity);
// const mercuryLiquidWeight = getWeight(mercuryThousandLitersWeight, mercuryTankWagonVolume, mercuryTankWagonQuantity);

// const summaryWeight = oilLiquidWeight + waterLiquidWeight + mercuryLiquidWeight;

// Вивід загальної ваги рідин всіх типів
console.log(summaryWeight);
