const tamagochi = {
    name: 'Bob',
    years: 5,
    health: 100,
    happyness: 100,
    feed: 100,
    mentalHealth: 100,
    weariness: 20,
    checkHealth(name, param) {
        if (param <= 0) {
            console.log(`${name} is gone`);
            return false;
        }
        return true;
    },
    eatBurger() {
        if (!this.checkHealth(this.name, this.health)) {
            return false;
        }
        this.health -= 2;
        this.happyness += 2;
        this.feed += 5;
        this.weariness += 4;
        return true;
    },
    eatSalad() {
        if (!this.checkHealth(this.name, this.health)) {
            return false;
        }
        this.health += 1;
        this.happyness += 1;
        this.feed += 1;
        this.weariness += 1;
        return true;
    },
    eatMcmenu() {
        if (!this.checkHealth(this.name, this.health)) {
            return false;
        }
        this.health -= 2;
        this.happyness += 2;
        this.feed += 9;
        this.weariness += 7;
        return true;
    },
    drinkWater() {
        if (!this.checkHealth(this.name, this.health)) {
            return false;
        }
        this.health += 1;
        this.feed += 1;
        this.happyness += 1;
        this.weariness -= 5;
        this.mentalHealth += 1;
        return true;
    },
    walk() {
        if (!this.checkHealth(this.name, this.health)) {
            return false;
        }
        this.health += 2;
        this.feed -= 5;
        this.happyness += 1;
        this.weariness += 2;
        this.mentalHealth += 2;
        return true;
    },
    sleep() {
        if (!this.checkHealth(this.name, this.health)) {
            return false;
        }
        this.health += 5;
        this.feed -= 8;
        this.happyness += 2;
        this.weariness -= 5;
        this.mentalHealth += 6;
        return true;
    },
    watchYoutube() {
        if (!this.checkHealth(this.name, this.health)) {
            return false;
        }
        this.health -= 1;
        this.feed -= 3;
        this.happyness += 1;
        this.weariness -= 4;
        return true;
    },
};

tamagochi.eatBurger();
tamagochi.eatSalad();
tamagochi.eatMcmenu();
tamagochi.drinkWater();
tamagochi.walk();
tamagochi.sleep();
console.log(tamagochi);
