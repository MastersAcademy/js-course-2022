const tamagochi = {
    name: 'Bug',
    years: 5,
    health: 100,
    happyness: 100,
    feed: 100,
    mentalHealth: 100,
    weariness: 20,
};

// Eat a burger!
tamagochi.eatBurger = function () {
    this.health -= 1;
    this.happyness += 2;
    this.feed += 5;
    this.weariness += 4;
};

// Eat a salad!
tamagochi.eatSalad = function () {
    this.health += 1;
    this.happyness += 1;
    this.feed += 1;
    this.weariness += 1;
};

// Eat a McMenu!
tamagochi.eatMcmenu = function () {
    this.health -= 2;
    this.happyness += 2;
    this.feed += 9;
    this.weariness += 7;
};

// Drink a glass of water!
tamagochi.drinkWater = function () {
    this.health += 1;
    this.feed += 1;
    this.happyness += 1;
    this.weariness -= 5;
    this.mentalHealth += 1;
};

// Running around the house!
tamagochi.walk = function () {
    this.health += 2;
    this.feed -= 5;
    this.happyness += 1;
    this.weariness += 2;
    this.mentalHealth += 2;
};

// Sleep!
tamagochi.sleep = function () {
    this.health += 5;
    this.feed -= 8;
    this.happyness += 2;
    this.weariness -= 5;
    this.mentalHealth += 6;
};

// Watching youtube!
tamagochi.watchYoutube = function () {
    this.health -= 1;
    this.feed -= 3;
    this.happyness += 1;
    this.weariness -= 4;
};

tamagochi.eatBurger();
console.log(tamagochi);
