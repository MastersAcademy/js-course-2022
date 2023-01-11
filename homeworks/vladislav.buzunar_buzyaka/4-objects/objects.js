const tamagochi = {
    name: 'Тамагочi',
    age: 23,
    healthLevels: 5,
    happyLevels: 3,
    foodLevels: 4,
    alive: true,
    get alived() {
        return this.healthLevels > 0 && this.happyLevels > 0 && this.foodLevels > 0;
    },
    get tamagochiStates() {
        return `Здоров'я  в ${this.name} - ${this.healthLevels} Щастя - ${this.happyLevels} Ситість - ${this.foodLevels}`;
    },
    doGameOver() {
        this.alive = false;
        console.log(`${this.name} вмер...`);
        return this;
    },
    eat() {
        if (!this.alived) {
            this.doGameOver();
            return this;
        }
        this.healthLevels += 2;
        this.happyLevels += 2;
        this.foodLevels += 2;
        console.log(`Сьогодні, наший ${this.name}, схопив свою здобич! ${this.tamagochiStates}`);
        if (!this.alived) {
            this.doGameOver();
            return this;
        }
        return this;
    },
    idol() {
        if (!this.alived) {
            this.doGameOver();
            return this;
        }
        this.healthLevels -= 1;
        this.happyLevels -= 1;
        this.foodLevels -= 1;
        if (this.foodLevels === 1) {
            console.log(`Покорми, ${this.name}, бо вiн скоро вмре... ${this.tamagochiStates}`);
        } else {
            console.log(`Сьогодні ${this.name} нічого не вполював... ${this.tamagochiStates}`);
        }
        if (!this.alived) {
            this.doGameOver();
            return this;
        }
        return this;
    },
    play() {
        if (!this.alived) {
            this.doGameOver();
            return this;
        }
        this.healthLevels -= 1;
        this.happyLevels += 3;
        this.foodLevels -= 1;
        if (this.happyLevels > 0) {
            console.log(`Сьогоднi наш ${this.name} погрався з тобою! ${this.tamagochiStates}`);
        }
        if (!this.alived) {
            this.doGameOver();
            return this;
        }
        return this;
    },
    doExercises() {
        if (!this.alived) {
            this.doGameOver();
            return this;
        }
        this.healthLevels -= 1;
        this.happyLevels -= 1;
        this.foodLevels -= 1;
        console.log(`Сьогоднi ${this.name} нiчого не робив. ${this.tamagochiStates}`);
        if (!this.alived) {
            this.doGameOver();
            return this;
        }
        return this;
    },
};

// tamagochi.idol().idol().idol(); // example died

tamagochi.eat().idol().play().doExercises();

const sobaken = Object.create(tamagochi);

sobaken.name = 'Рiчард';
sobaken.age = 1;
sobaken.favoritFood = 'мнясо';
console.log(`Нашого собакена звати ${sobaken.name}. Собакену ${sobaken.age} роки, його найулюбленіша їжа це - ${sobaken.favoritFood}!`);
