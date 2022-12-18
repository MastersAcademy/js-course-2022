const tamagochi = {
    name: 'Tamagochi',
    age: 23,
    healthLevels: 5,
    happyLevels: 3,
    foodLevels: 4,
    noEating() {
        tamagochi.healthLevels -= 1;
        tamagochi.happyLevels -= 1;
        tamagochi.foodLevels -= 1;

        const tamagochiStates = `Здоров'я  в ${tamagochi.name} - ${tamagochi.healthLevels} Щастя - ${tamagochi.happyLevels} Ситість - ${tamagochi.foodLevels}`;

        const tamagochiDied = tamagochi.healthLevels === 0 || tamagochi.happyLevels === 0 || tamagochi.foodLevels === 0;

        if (tamagochiDied === true) {
            console.log(`${tamagochi.name} вмер... ${tamagochiStates}`);
        } else if (tamagochi.foodLevels === 1) {
            console.log(`Покорми, ${tamagochi.name}, бо вiн скоро вмре... ${tamagochiStates}`);
        } else {
            console.log(`Сьогодні ${tamagochi.name} нічого не вполював... ${tamagochiStates}`);
        }
    },
    eating() {
        const tamagochiStates = `Здоров'я  в ${tamagochi.name} - ${tamagochi.healthLevels} Щастя - ${tamagochi.happyLevels} Ситість - ${tamagochi.foodLevels}`;
        tamagochi.healthLevels += 2;
        tamagochi.happyLevels += 2;
        tamagochi.foodLevels += 2;
        if (tamagochi.foodLevels > 0) {
            console.log(`Сьогодні, наший ${tamagochi.name}, схопив свою здобич! ${tamagochiStates}`);
        }
    },
};

tamagochi.noEating();
tamagochi.eating();

const Sobaken = Object.create(tamagochi);

Sobaken.name = 'Рiчард';
Sobaken.age = 1;
Sobaken.favoritFood = 'мнясо';
console.log(`Нашого собакена звати ${Sobaken.name}. Собакену ${Sobaken.age} роки, його найулюбленіша їжа це - ${Sobaken.favoritFood}`);
