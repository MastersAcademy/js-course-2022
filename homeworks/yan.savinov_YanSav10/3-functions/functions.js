const oilDencity = 926;
const waterDencity = 1000;
const mercuryDencity = 1355;

const oilTankQuantity = 3;
const waterTankQuantity = 5;
const mercuryTankQuantity = 2;

let oilWeight;
let waterWeight;
let mercuryWeight;

function getWeight(weight, liquid, count) {
    switch (liquid) {
        case 'oil':
            oilWeight = weight * count;
            break;
        case 'water':
            waterWeight = weight * count;
            break;
        case 'mercury':
            mercuryWeight = weight * count;
            break;
        default:
            console.log('Wrong liquid value!');
    }
}

getWeight(oilDencity, 'oil', oilTankQuantity);
getWeight(waterDencity, 'water', waterTankQuantity);
getWeight(mercuryDencity, 'mercury', mercuryTankQuantity);

let totalWeight;

function getAllWeight() {
    totalWeight = oilWeight + waterWeight + mercuryWeight;
}

getAllWeight();

console.log(`Total weight = ${totalWeight} kg`);
