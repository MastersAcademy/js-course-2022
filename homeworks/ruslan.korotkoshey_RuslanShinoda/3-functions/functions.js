function getWeight(weight, liquid, count) {
    return weight * count;
}

const waterWeight = getWeight(1000, 'water', 5);
const oilWeight = getWeight(926, 'oil', 3);
const mercuryWeight = getWeight(1355, 'mercury', 2);

function totalWeight() {
    return waterWeight + oilWeight + mercuryWeight;
}
const result = totalWeight();
console.log(result);
