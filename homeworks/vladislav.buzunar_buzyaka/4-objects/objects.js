const tamagochi = {
    name: 'тамагочi',
    age: 23,
    healthLevels: 5,
    happyLevels: 3,
    foodLevels: 4,
    alive: true,
    get tamagochiStates() {
        return `Здоров'я  в ${this.name} - ${this.healthLevels} Щастя - ${this.happyLevels} Ситість - ${this.foodLevels}`;
    },
    get doGameOver() {
        return 'Game over!';
    },
    eat() {
        if (!this.alive) {
            this.doGameOver();
        }
        this.healthLevels += 2;
        this.happyLevels += 2;
        this.foodLevels += 2;
        if (!this.alive) {
            this.doGameOver();
        }
        if (this.foodLevels > 0) {
            console.log(`Сьогодні, наший ${this.name}, схопив свою здобич! ${this.tamagochiStates}`);
        }
        return this;
    },
    idol() {
        if (!this.alive) {
            this.doGameOver();
        }
        this.healthLevels -= 1;
        this.happyLevels -= 1;
        this.foodLevels -= 1;
        if (this.foodLevels === 1) {
            console.log(`Покорми, ${this.name}, бо вiн скоро вмре... ${this.tamagochiStates}`);
        } else {
            console.log(`Сьогодні ${this.name} нічого не вполював... ${this.tamagochiStates}`);
        }
        if (!this.alive) {
            this.doGameOver();
        }
        return this;
    },
    play() {
        if (!this.alive) {
            this.doGameOver();
        }
        this.healthLevels += 1;
        this.happyLevels += 3;
        this.foodLevels += 1;
        if (this.happyLevels > 0) {
            console.log(`Сьогоднi наш ${this.name} погрався з тобою! ${this.tamagochiStates}`);
        }
        if (!this.alive) {
            this.doGameOver();
        }
        return this;
    },
    doExercises() {
        if (!this.alive) {
            this.doGameOver();
        }
        this.healthLevels += 1;
        this.happyLevels += 2;
        this.foodLevels += 1;
        if (this.healthLevels <= 0) {
            console.log(`${this.name} вмер... ${this.tamagochiStates}`);
        }
        if (!this.alive) {
            this.doGameOver();
        }
        return this;
    },
};

tamagochi.eat().eat().doExercises().idol();

const sobaken = Object.create(tamagochi);

sobaken.name = 'Рiчард';
sobaken.age = 1;
sobaken.favoritFood = 'мнясо';
console.log(`Нашого собакена звати ${sobaken.name}. Собакену ${sobaken.age} роки, його найулюбленіша їжа це - ${sobaken.favoritFood}`);
