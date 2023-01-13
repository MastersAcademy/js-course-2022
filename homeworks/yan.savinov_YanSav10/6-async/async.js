const tamagochi = {
    healthValue: 5,
    happinessValue: 5,
    satietyValue: 5,
    checkHealthIndicators() {
        console.log(`(health: ${this.healthValue}, happiness: ${this.happinessValue}, satiety: ${this.satietyValue})`);
    },
    play() {
        this.healthValue--;
        this.satietyValue--;
        this.happinessValue++;
        console.log('play');
        this.checkHealthIndicators();
    },
    eat() {
        this.healthValue--;
        this.satietyValue++;
        this.happinessValue++;
        console.log('eat');
        this.checkHealthIndicators();
    },
    sleep() {
        this.healthValue++;
        this.happinessValue++;
        this.satietyValue--;
        console.log('sleep');
        this.checkHealthIndicators();
    },
    training() {
        this.healthValue++;
        this.happinessValue--;
        this.satietyValue--;
        console.log('training');
        this.checkHealthIndicators();
    },
    relax() {
        this.healthValue--;
        this.happinessValue++;
        this.satietyValue--;
        console.log('relax');
        this.checkHealthIndicators();
    },
};
const tamagochiMethods = ['play', 'eat', 'sleep', 'training', 'relax'];

console.time('Tamagochi live for');
const randomFunction = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * tamagochiMethods.length);
    tamagochi[tamagochiMethods[randomNumber]]();

    const isAlive = tamagochi.healthValue <= 1 || tamagochi.happinessValue <= 1
    || tamagochi.satietyValue <= 1;

    if (isAlive) {
        clearInterval(randomFunction);
        console.log(`Game over! (health: ${tamagochi.healthValue}, happiness: ${tamagochi.happinessValue}, satiety: ${tamagochi.satietyValue})`);
        console.timeEnd('Tamagochi live for');
    }
}, 500);
