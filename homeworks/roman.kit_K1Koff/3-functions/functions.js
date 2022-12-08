function getWeight() {
    this.liquid = this.count * this.weight;
    return this.liquid;
}

const waterShipment = {
    liquid: 'water',
    weight: 1000,
    count: 5,
    getWeight,
};

const oilShipment = {
    liquid: 'oil',
    weight: 926,
    count: 3,
    getWeight,
};

const mercuryShipment = {
    liquid: 'mercury',
    weight: 1355,
    count: 2,
    getWeight,
};

const totalWeight = oilShipment.getWeight()
    + mercuryShipment.getWeight()
    + waterShipment.getWeight();

console.log(`Загальна вага становить: ${totalWeight}`);
