const tamagochi = {
    name: 'Bob',
    health: 100,
    happyness: 100,
    feed: 100,
    mentalHealth: 100,
    weariness: 20,
    checkLife() {
        let isAlive = true;
        const arrayParams = [];

        if (this.health <= 0) {
            isAlive = false;
            arrayParams.push(`health = ${this.health}`);
        }
        if (this.happyness <= 0) {
            isAlive = false;
            arrayParams.push(`happyness = ${this.happyness}`);
        }
        if (this.feed <= 0) {
            isAlive = false;
            arrayParams.push(`feed = ${this.feed}`);
        }
        if (this.mentalHealth <= 0) {
            isAlive = false;
            arrayParams.push(`mentalHealth = ${this.mentalHealth}`);
        }
        if (this.weariness <= 0) {
            isAlive = false;
            arrayParams.push(`weariness = ${this.weariness}`);
        }

        if (!isAlive) {
            console.log(`${this.name} is gone because one of the vitals went below zero: ${arrayParams.join(', ')}`);
        }
        return isAlive;
    },
    eatBurger() {
        if (this.checkLife()) {
            this.health -= 2;
            this.happyness -= 2;
            this.feed += 5;
            this.weariness += 4;
        }
    },
    eatSalad() {
        if (this.checkLife()) {
            this.health += 1;
            this.happyness += 1;
            this.feed += 1;
            this.weariness += 1;
        }
    },
    eatMcmenu() {
        if (this.checkLife()) {
            this.health -= 2;
            this.happyness += 2;
            this.feed += 9;
            this.weariness += 7;
        }
    },
    drinkWater() {
        if (this.checkLife()) {
            this.health += 1;
            this.feed += 1;
            this.happyness += 1;
            this.weariness -= 5;
            this.mentalHealth += 1;
        }
    },
    walk() {
        if (this.checkLife()) {
            this.health += 2;
            this.feed -= 5;
            this.happyness += 1;
            this.weariness += 2;
            this.mentalHealth += 2;
        }
    },
    sleep() {
        if (this.checkLife()) {
            this.health += 5;
            this.feed -= 8;
            this.happyness += 2;
            this.weariness -= 5;
            this.mentalHealth += 6;
        }
    },
    watchYoutube() {
        if (this.checkLife()) {
            this.health -= 1;
            this.feed -= 3;
            this.happyness += 1;
            this.weariness -= 4;
        }
    },
};

tamagochi.eatBurger();

console.log(`
Current status ${tamagochi.name}:
    Health - ${tamagochi.health};
    Feed - ${tamagochi.feed};
    Happyness - ${tamagochi.happyness};
    MentalHealth - ${tamagochi.mentalHealth};
    Weariness - ${tamagochi.weariness};
`);
