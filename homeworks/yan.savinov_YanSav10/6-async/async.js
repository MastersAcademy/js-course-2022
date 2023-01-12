const tamagochi = {
    healthValue: 5,
    happinessValue: 5,
    satietyValue: 5,
    play() {
        this.healthValue--;
        this.satietyValue--;
        this.happinessValue++;
        console.log(`play (health: ${this.healthValue}, happiness: ${this.happinessValue}, satiety: ${this.satietyValue})`);
    },
    eat() {
        this.healthValue--;
        this.satietyValue++;
        this.happinessValue++;
        console.log(`eat (health: ${this.healthValue}, happiness: ${this.happinessValue}, satiety: ${this.satietyValue})`);
    },
    sleep() {
        this.healthValue++;
        this.happinessValue++;
        this.satietyValue--;
        console.log(`sleep (health: ${this.healthValue}, happiness: ${this.happinessValue}, satiety: ${this.satietyValue})`);
    },
    training() {
        this.healthValue++;
        this.happinessValue--;
        this.satietyValue--;
        console.log(`training (health: ${this.healthValue}, happiness: ${this.happinessValue}, satiety: ${this.satietyValue})`);
    },
    relax() {
        this.healthValue--;
        this.happinessValue++;
        this.satietyValue--;
        console.log(`relax (health: ${this.healthValue}, happiness: ${this.happinessValue}, satiety: ${this.satietyValue})`);
    },
};

const arrayFunc = ['play', 'eat', 'sleep', 'training', 'relax'];

let timeTamagochiIsAlive = 0;

const randomFunc = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * arrayFunc.length);
    tamagochi[arrayFunc[randomNumber]]();

    const isAlive = tamagochi.healthValue <= 0 || tamagochi.happinessValue <= 0
    || tamagochi.satietyValue <= 0;

    if (isAlive) {
        clearInterval(randomFunc);
        console.log(`Game over! (health: ${tamagochi.healthValue}, happiness: ${tamagochi.happinessValue}, satiety: ${tamagochi.satietyValue}) \nTamagochi live for ${timeTamagochiIsAlive} seconds`);
    }
    timeTamagochiIsAlive += 0.5;
}, 500);
