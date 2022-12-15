const oilWeight = 926;
const waterWeight = 1000;
const mercuryWeight = 1355;
const liquidVolumeLiters = 1000;

function getWeight(weight, liquid, count) {
    const totalAmount = (weight / liquid) * liquid * count;

    if (mercuryWeight) {
        console.log(`Total amount of mercury = ${totalAmount} kg.`);
    } else if (waterWeight) {
        console.log(`Total amount of water = ${totalAmount} kg.`);
    } else if (oilWeight) {
        console.log(`Total amount of oil = ${totalAmount} kg.`);
    }
    return totalAmount;
}

const totalMercury = getWeight(mercuryWeight, liquidVolumeLiters, 2);
const totalWater = getWeight(waterWeight, liquidVolumeLiters, 5);
const totalOil = getWeight(oilWeight, liquidVolumeLiters, 3);

const allLiquidsTotalAmount = totalMercury + totalWater + totalOil;

console.log(`\nTotal weight of all liquids = ${allLiquidsTotalAmount} kg.`);
