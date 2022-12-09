// стартові дані
const oilThousandLitersWeight = 926;
const waterThousandLitersWeight = 1000;
const mercuryThousandLitersWeight = 1355;

const oilTankWagonQuantity = 3;
const waterTankWagonQuantity = 5;
const mercuryTankWagonQuantity = 2;

const oilTankWagonVolume = 1000;
const waterTankWagonVolume = 1000;
const mercuryTankWagonVolume = 1000;

// Змінна для першого варіанту обчислення суми трьох рідин
let summaryLiquidWeight = 0;

// Ініціалізація функції
function getWeight(weight, liquid, count) {
    // Обчислення маси одного типу рідини
    const oneTypeLiquidWeight = weight/1000 * liquid * count;
    return oneTypeLiquidWeight;
}

// Перший варіант накопичення даних про вагу всіх рідин
summaryLiquidWeight += getWeight(oilThousandLitersWeight, oilTankWagonVolume, oilTankWagonQuantity);
summaryLiquidWeight += getWeight(waterThousandLitersWeight, waterTankWagonVolume, waterTankWagonQuantity);
summaryLiquidWeight += getWeight(mercuryThousandLitersWeight, mercuryTankWagonVolume, mercuryTankWagonQuantity);

// Другий варіант накопичення даних про вагу всіх рідин [Для коректного виконання необхідно закоментувати вище рядок let summaryLiquidWeight = 0 ]
// const oilLiquidWeight = getWeight(oilThousandLitersWeight, oilTankWagonVolume, oilTankWagonQuantity);
// const waterLiquidWeight = getWeight(waterThousandLitersWeight, waterTankWagonVolume, waterTankWagonQuantity);
// const mercuryLiquidWeight = getWeight(mercuryThousandLitersWeight, mercuryTankWagonVolume, mercuryTankWagonQuantity);

// const summaryLiquidWeight = oilLiquidWeight + waterLiquidWeight + mercuryLiquidWeight;

// Вивід загальної ваги рідин всіх типів
console.log(summaryLiquidWeight);
