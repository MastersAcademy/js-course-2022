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
    feed() {
        this.satietyValue++;
    },
    healthUp() {
        this.healthValue++;
    },
    training() {
        this.healthValue++;
        this.happinessValue--;
        this.satietyValue--;
    },
    lifeCheck() {
        const isAlive = this.healthValue > 0 && this.happinessValue > 0 && this.satietyValue > 0;
        if (isAlive) {
            console.log(`${this.name} is alive!`);
        } else {
            console.log(`${this.name} is died!`)
        }
    },
};
tamagochi.play();
tamagochi.feed();
tamagochi.healthUp();
tamagochi.training();
tamagochi.play();
tamagochi.play();
tamagochi.play();
tamagochi.play();
tamagochi.training();
tamagochi.training();
tamagochi.lifeCheck();
