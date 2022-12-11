const TANK_VOLUME = 1000;

const coefficients = {
    oil: .926,
    water: 1,
    mercury: 1.355,
}

function getWeight(weight, liquid, count) {
    switch(liquid) {
        case 'oil':
        return weight * coefficients.oil * count;
        case 'water':
        return weight * coefficients.water * count;
        case 'mercury':
        return weight * coefficients.mercury * count;
        default:
        throw new Error('No such liquid found');
    }
}

const totalWeight = getWeight(TANK_VOLUME, 'oil', 3)
+ getWeight(TANK_VOLUME, 'water', 5) + getWeight(TANK_VOLUME, 'mercury', 2);

console.log(totalWeight);
