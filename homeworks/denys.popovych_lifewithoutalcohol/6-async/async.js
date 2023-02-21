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
            return true;
        }
        return false;
    },
};

const allPropertiesTamagotchi = Object.values(tamagotchi);
const methodsTamagotchi = allPropertiesTamagotchi.filter((item) => typeof item === 'function' && item.name !== 'checkLife');

function getRandomValue() {
    const rer = Math.floor(Math.random() * 10);
    if (rer >= methodsTamagotchi.length) {
        return getRandomValue();
    }
    return rer;
}

let start;
let startDate;
let finishDate;
let lifetime;

function startGame() {
    return new Promise((resolve) => {
        start = setInterval(() => {
            const nameMethod = methodsTamagotchi[getRandomValue()].name;
            console.log('Method is:', nameMethod);
            tamagotchi[nameMethod]();
            if (tamagotchi.checkLife()) {
                finishDate = Date.now();
                clearInterval(start);
                resolve(finishDate);
            }
        }, 500);
    });
}

async function startPlay() {
    startDate = Date.now();
    await startGame();
    lifetime = (finishDate - startDate) / 1000;
    console.log(`Your pet lived ${lifetime} second`);
}
startPlay();
