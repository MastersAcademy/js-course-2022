const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const getWeight = (weight, liquid, count) => {
    switch (liquid) {
        case 'OIL':
        case 'WATER':
        case 'MERCURY':
            return weight * count;
        case '':
            return 'Please enter liquid';
        default:
            return `Загальна маса рідини: ${OIL * 3 + WATER * 5 + MERCURY * 2}`;
    }
};

console.log(getWeight(926, 'OIL', 3)); // Вага олії
console.log(getWeight(1000, 'WATER', 5)); // Вага води
console.log(getWeight(1355, 'MERCURY', 2)); // Вага ртуті
console.log(getWeight()); // Загальна вага
