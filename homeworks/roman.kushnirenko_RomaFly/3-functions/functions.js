const oilWeight = 926;
const waterWeight = 1000;
const mercuryWeight = 1355;

function getWeight(weight, liquid, count) {
    const totalAmount = weight * count;

    console.log(`Total amount of ${liquid} = ${totalAmount} kg.`);
    return totalAmount;
}

const totalMercury = getWeight(mercuryWeight, 'mercury', 2);
const totalWater = getWeight(waterWeight, 'water', 5);
const totalOil = getWeight(oilWeight, 'oil', 3);

const allLiquidsTotalAmount = totalMercury + totalWater + totalOil;

console.log(`\nTotal weight of all liquids = ${allLiquidsTotalAmount} kg.`);

// Завдання з зірочкою

function exponentiation(num1, num2) {
    if (num2 === 1) {
        return num1;
    }
    return num1 * exponentiation(num1, num2 - 1);
}

console.log(`\nПіднесення до степеня: ${exponentiation(2, 4)}`);
