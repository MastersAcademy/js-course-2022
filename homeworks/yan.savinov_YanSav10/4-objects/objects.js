const tamagochi = {
    name: 'Tamagochi',
    healthValue: 5,
    happinessValue: 5,
    satietyValue: 5,
    play() {
        this.healthValue--;
        this.satietyValue--;
        this.happinessValue++;
    },
    eat() {
        this.healthValue--;
        this.satietyValue++;
        this.happinessValue++;
    },
    sleep() {
        this.healthValue++;
        this.happinessValue++;
        this.satietyValue--;
    },
    training() {
        this.healthValue++;
        this.happinessValue--;
        this.satietyValue--;
    },
    relax() {
        this.healthValue--;
        this.happinessValue++;
        this.satietyValue--;
    },
    lifeCheck() {
        const isAlive = this.healthValue > 0 && this.happinessValue > 0 && this.satietyValue > 0;
        if (isAlive) {
            console.log(`${this.name} is alive!`);
        } else {
            console.log(`${this.name} died!`);
        }
    },
};
tamagochi.play();
tamagochi.eat();
tamagochi.sleep();
tamagochi.training();
tamagochi.relax();
tamagochi.lifeCheck();
