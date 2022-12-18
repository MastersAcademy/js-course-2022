const eagle = {
    name: 'Орел',
    age: 5,
    healthLevel: 4,
    happyLevel: 4,
    foodLevel: 2,
    noHunting() {
        this.healthLevel -= 2;
        this.happyLevel -= 2;
        this.foodLevel -= 1;

        const stateOfEagle = `\nЗдоров'я - ${this.healthLevel} \nЩастя - ${this.happyLevel} \nСитість - ${this.foodLevel}`;

        const eagleIsDead = this.healthLevel === 0 || this.happyLevel === 0 || this.foodLevel === 0;

        if (eagleIsDead) {
            console.log(`${this.name} помер ${stateOfEagle}`);
        } else if (this.foodLevel === 1) {
            console.log(`Покорми, ${this.name} на межі виживання! ${stateOfEagle}`);
        } else {
            console.log(`Сьогодні ${this.name} нічого не спіймав: ${stateOfEagle}`);
        }
    },
    hunting() {
        this.healthLevel += 2;
        this.happyLevel += 2;
        this.foodLevel += 1;
        if (this.foodLevel > 0) {
            console.log(`Сьогодні вдалий день, ${this.name} впіймав здобич`);
        }
    },
};

eagle.noHunting();
setTimeout(eagle.hunting, 2000);

const hamster = Object.create(eagle);

hamster.name = 'Хом`як Джон';
hamster.age = 2;
hamster.favoritFood = 'горіхи';
console.log(`Хом'яку ${hamster.age} роки, улюблена їжа - ${hamster.favoritFood}`);

hamster.noHunting();
hamster.hunting();
