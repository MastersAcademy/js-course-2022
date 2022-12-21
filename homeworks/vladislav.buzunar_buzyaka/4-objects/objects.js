const tamagochi = {
    name: 'тамагочi',
    age: 23,
    healthLevels: 5,
    happyLevels: 3,
    foodLevels: 4,
    aliveLee: true,
    noEating() {
        this.healthLevels -= 1;
        this.happyLevels -= 1;
        this.foodLevels -= 1;
        const tamagochiStates = `Здоров'я  в ${tamagochi.name} - ${tamagochi.healthLevels} Щастя - ${tamagochi.happyLevels} Ситість - ${tamagochi.foodLevels}`;
        const tamDied = this.healthLevels === 0 || this.happyLevels === 0 || this.foodLevels === 0;
        if (tamDied === true) {
            console.log(`${this.name} вмер... ${tamagochiStates}`);
        } else if (this.foodLevels === 1) {
            console.log(`Покорми, ${this.name}, бо вiн скоро вмре... ${tamagochiStates}`);
        } else {
            console.log(`Сьогодні ${this.name} нічого не вполював... ${tamagochiStates}`);
        }
    },
    eating() {
        this.healthLevels += 2;
        this.happyLevels += 2;
        this.foodLevels += 2;
        const tamagochiStates = `Здоров'я  в ${tamagochi.name} - ${tamagochi.healthLevels} Щастя - ${tamagochi.happyLevels} Ситість - ${tamagochi.foodLevels}`;
        if (this.foodLevels > 0) {
            console.log(`Сьогодні, наший ${this.name}, схопив свою здобич! ${tamagochiStates}`);
        }
    },
    play() {
        this.healthLevels += 1;
        this.happyLevels += 3;
        this.foodLevels += 1;
        const tamagochiStates = `Здоров'я  в ${tamagochi.name} - ${tamagochi.healthLevels} Щастя - ${tamagochi.happyLevels} Ситість - ${tamagochi.foodLevels}`;
        if (this.happyLevels > 0) {
            console.log(`Сьогоднi наш ${this.name} погрався з тобою! ${tamagochiStates}`);
        }
    },
    doExercises() {
        this.healthLevels += 1;
        this.happyLevels += 2;
        this.foodLevels += 1;
        const tamagochiStates = `Здоров'я  в ${tamagochi.name} - ${tamagochi.healthLevels} Щастя - ${tamagochi.happyLevels} Ситість - ${tamagochi.foodLevels}`;
        if (this.healthLevels <= 0) {
            console.log(`${this.name} вмер... ${tamagochiStates}`);
        }
    },
};

if (tamagochi.foodLevels <= 0 || tamagochi.healthLevels <= 0 || tamagochi.happyLevels <= 0) {
    tamagochi.aliveLee = false;
    console.log('Game over! Play again!');
}

tamagochi.noEating();
tamagochi.eating();
tamagochi.play();
tamagochi.doExercises();

const sobaken = Object.create(tamagochi);

sobaken.name = 'Рiчард';
sobaken.age = 1;
sobaken.favoritFood = 'мнясо';
console.log(`Нашого собакена звати ${sobaken.name}. Собакену ${sobaken.age} роки, його найулюбленіша їжа це - ${sobaken.favoritFood}`);
