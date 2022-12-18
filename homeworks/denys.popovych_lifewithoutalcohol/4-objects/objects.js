const tamagotchi = {
    name: 'pet',
    health: 6,
    happiness: 4,
    satiety: 10,
    energy: 6,
    run() {
        this.energy -= 1;
        this.health += 1;
        this.satiety -= 2;
        console.log(`Your ${this.name} ran more today than usual. Your ${this.name} health: ${this.health}, happiness: ${this.happiness}, satiety: ${this.satiety}, energy: ${this.energy}`);
    },
    sleep() {
        this.energy = 6;
        this.health += 1;
        this.satiety -= 1;
        console.log(`Your ${this.name} got some sleep. Your ${this.name} health: ${this.health}, happiness: ${this.happiness}, satiety: ${this.satiety}, energy: ${this.energy}`);
    },
    tickle() {
        this.happiness += 1;
        console.log(`${this.name} laughs. Your ${this.name} health: ${this.health}, happiness: ${this.happiness}, satiety: ${this.satiety}, energy: ${this.energy}`);
    },
    eat(favoritefood) {
        if (favoritefood) {
            this.health += 3;
            this.satiety += 6;
        } else {
            this.health += 2;
            this.satiety += 5;
            this.energy -= 1;
        }
        if (this.satiety > 10) this.satiety = 10;
        console.log(`Your ${this.name} ate. Your ${this.name} health: ${this.health}, happiness: ${this.happiness}, satiety: ${this.satiety}, energy: ${this.energy}`);
    },
    play() {
        this.happiness += 3;
        this.health -= 1;
        this.satiety -= 1;
        this.energy -= 2;
        console.log(`You had play with ${this.name}. Your ${this.name} health: ${this.health}, happiness: ${this.happiness}, satiety: ${this.satiety}, energy: ${this.energy}`);
    },
    goToTheToilet() {
        this.happiness += 2;
        console.log(`Your ${this.name} went to the toilet successfully. Your ${this.name} health: ${this.health}, happiness: ${this.happiness}, satiety: ${this.satiety}, energy: ${this.energy}`);
    },
    gotSick() {
        this.health -= 3;
        this.happiness -= 5;
        this.satiety -= 3;
        this.energy -= 1;
        console.log(`Your ${this.name} got sick. Your ${this.name} health: ${this.health}, happiness: ${this.happiness}, satiety: ${this.satiety}, energy: ${this.energy}`);
    },
    treat() {
        this.health += 1;
        this.happiness += 1;
        console.log(`Your ${this.name} has cured. Your ${this.name} health: ${this.health}, happiness: ${this.happiness}, satiety: ${this.satiety}, energy: ${this.energy}`);
    },
    checkLife() {
        if (this.health <= 0 || this.happiness <= 0 || this.satiety <= 0 || this.energy <= 0) {
            console.log(`Your ${this.name} has died`);
        }
    },
    mating() {
        this.energy = 1;
    },
};
let lionChild;
// ========= Create animal ==========
const lion = Object.create(tamagotchi);
lion.name = 'lion Alex';
lion.satiety = 5;
lion.favoriteFood = 'meat';
// ==================================

// ========= Create animal ==========
const lioness = Object.create(tamagotchi);
lioness.name = 'lioness Florrie';
lioness.satiety = 8;
lioness.beauty = 5;
lioness.bath = function () {
    this.beauty += 1;
    this.energy -= 1;
    console.log(`Your ${this.name} has bath. Your ${this.name} health: ${this.health}, happiness: ${this.happiness}, satiety: ${this.satiety}, energy: ${this.energy}, beauty: ${this.beauty}`);
};
// ==================================

console.log();
console.log(`=========Play with ${lion.name}=========`);
lion.checkLife();
lion.eat(`${this.favoriteFood}`);
lion.checkLife();
lion.run();
lion.checkLife();
lion.play();
lion.checkLife();
lion.sleep();
lion.checkLife();

console.log();
console.log(`=========Play with ${lioness.name}=========`);
lioness.checkLife();
lioness.play();
lioness.checkLife();
lioness.gotSick();
lioness.checkLife();
lioness.treat();
lioness.checkLife();
lioness.eat(`${this.favoriteFood}`); // no favorite
lioness.checkLife();
lioness.run();
lioness.checkLife();
lioness.sleep();
lioness.checkLife();
lioness.bath();
lioness.checkLife();
if (lioness.beauty >= 6 && lion.energy === 6) {
    lion.mating();
    lion.checkLife();
    lioness.mating();
    lioness.checkLife();
    lioness.beauty = 1;
    lionChild = Object.create(tamagotchi);
    console.log();
    console.log('=========А lion cub was born=========');
    lionChild.name = 'lion cub';
    lionChild.checkLife();
    lionChild.eat();
    lionChild.checkLife();
}

console.log();
console.log(`=========Play with ${tamagotchi.name}=========`);
tamagotchi.checkLife();
tamagotchi.tickle();
tamagotchi.checkLife();
tamagotchi.play();
tamagotchi.checkLife();
tamagotchi.goToTheToilet();
tamagotchi.checkLife();
tamagotchi.gotSick();
tamagotchi.checkLife();
tamagotchi.treat();
tamagotchi.checkLife();
tamagotchi.gotSick();
tamagotchi.checkLife();
