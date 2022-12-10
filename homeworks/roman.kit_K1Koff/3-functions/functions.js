const waterShipment = {
    tankerVolume: 1000, // liters
    density: 1.0, // kg per liter
    tankersCount: 5, // number of tanks
};

const oilShipment = {
    tankerVolume: 1000,
    density: 0.926,
    tankersCount: 3,
};

const mercuryShipment = {
    tankerVolume: 1000,
    density: 1.355,
    tankersCount: 2,
};

function getWeight(liquidVolume, liquidDensity, count) {
    return liquidVolume * liquidDensity * count;
}

function countTotalWeight(...shipments) {
    return shipments.reduce((weightSum, currentShipment) => weightSum + getWeight(
        currentShipment.tankerVolume,
        currentShipment.density,
        currentShipment.tankersCount,
    ), 0);
}

const totalWeight = countTotalWeight(waterShipment, oilShipment, mercuryShipment);

console.log(`Загальна вага становить: ${totalWeight} кг`);
