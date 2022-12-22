const tamagochi = {
    name: 'тамагочi',
    age: 23,
    healthLevels: 5,
    happyLevels: 3,
    foodLevels: 4,
    get alive() {
        if (this.healthLevels === 0 || this.happyLevels === 0 || this.foodLevels === 0) {
            console.log(`${this.name} помер...`);
        } else {
            console.log(`${this.name} живе й далi!`);
        }
        return this;
    },
    get tamagochiStates() {
        return `Здоров'я  в ${this.name} - ${this.healthLevels} Щастя - ${this.happyLevels} Ситість - ${this.foodLevels}`;
    },
    get doGameOver() {
        console.log('Game over!');
        return this.alive;
    },
    eat() {
        this.alive;
        this.healthLevels += 2;
        this.happyLevels += 2;
        this.foodLevels += 2;
        if (this.foodLevels > 0) {
            console.log(`Сьогодні, наший ${this.name}, схопив свою здобич! ${this.tamagochiStates}`);
        }
        this.alive;
        return this;
    },
    idol() {
        this.alive;
        this.healthLevels -= 1;
        this.happyLevels -= 1;
        this.foodLevels -= 1;
        if (this.foodLevels === 1) {
            console.log(`Покорми, ${this.name}, бо вiн скоро вмре... ${this.tamagochiStates}`);
        } else {
            console.log(`Сьогодні ${this.name} нічого не вполював... ${this.tamagochiStates}`);
        }
        this.alive;
        return this;
    },
    play() {
        this.alive;
        this.healthLevels -= 1;
        this.happyLevels += 3;
        this.foodLevels -= 1;
        if (this.happyLevels > 0) {
            console.log(`Сьогоднi наш ${this.name} погрався з тобою! ${this.tamagochiStates}`);
        }
        this.alive;
        return this;
    },
    doExercises() {
        this.alive;
        this.healthLevels -= 1;
        this.happyLevels -= 1;
        this.foodLevels -= 1;
        if (this.healthLevels <= 0) {
            console.log(`${this.name} вмер... ${this.tamagochiStates}`);
        }
        this.alive;
        return this;
    },
};

// tamagochi.idol().idol().idol(); // example died

tamagochi.idol().eat().eat();

const sobaken = Object.create(tamagochi);

sobaken.name = 'Рiчард';
sobaken.age = 1;
sobaken.favoritFood = 'мнясо';
console.log(`Нашого собакена звати ${sobaken.name}. Собакену ${sobaken.age} роки, його найулюбленіша їжа це - ${sobaken.favoritFood}`);
