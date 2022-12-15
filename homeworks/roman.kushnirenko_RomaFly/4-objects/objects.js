const eagle = {
    health: 4,
    happy: 4,
    food: 2,
    age: 5,
    placeOfliving: 'Карпати',
    noHunting() {
        this.health -= 2;
        this.happy -= 2;
        this.food -= 1;

        if (this.health === 0 || this.happy === 0 || this.food === 0) {
            console.log('Орел помер');
        } else if (this.food === 1) {
            console.log(`Покорми орла, він на межі виживання! \nЗдоров'я - ${this.health} \nЩастя - ${this.happy} \nСитість - ${this.food}`);
        } else {
            console.log(`Сьогодні орел нічого не спіймав: \nЗдоров'я - ${this.health} \nЩастя - ${this.happy} \nСитість - ${this.food}`);
        }
    },
    hunting() {
        this.health += 2;
        this.happy += 2;
        this.food += 1;
        console.log('Сьогодні вдалий день, орел впіймав здобич');
    },
};

eagle.noHunting();

setTimeout(() => {
    eagle.hunting();
}, 2000);

// Завдання з зірочкою

const animal = {
    healthLevel: 10,
    happyLevel: 10,
    foodLevel: 5,
    name: '',
    age: 0,
    favoriteFood: '',
    noHunting() {
        this.healthLevel -= 2;
        this.happyLevel -= 2;
        this.foodLevel -= 1;

        if (this.healthLevel === 0 || this.happyLevel === 0 || this.foodLevel === 0) {
            console.log('Тваринка померла');
        } else if (this.food === 1) {
            console.log(`Треба покормити, на межі виживання! \nЗдоров'я - ${this.healthLevel}\nЩастя - ${this.happyLevel}\nСитість - ${this.foodLevel}`);
        } else {
            console.log(`Сьогодні ${this.name} нічого не їв: \nЗдоров'я - ${this.healthLevel}\nЩастя - ${this.happyLevel}\nСитість - ${this.foodLevel}`);
        }
    },
    hunting() {
        this.healthLevel += 2;
        this.happyLevel += 2;
        this.foodLevel += 1;
        console.log('Сьогодні вдалий день, ситий звірок');
    },
};

const hamster = Object.create(animal);

hamster.name = 'хом`як Джон'; // змінив існуючу властивість
hamster.age = 2;
hamster.favoritFood = 'горіхи';
hamster.favoritPlace = 'нора'; // додав нову властивість

console.log(`Хом'яку ${hamster.age} роки, улюблена їжа - ${hamster.favoritFood}`);

hamster.noHunting();
hamster.hunting();
