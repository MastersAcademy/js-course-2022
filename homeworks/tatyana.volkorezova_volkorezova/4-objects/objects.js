const tamagochi = {
    name: 'Kiki',
    ageDays: 3,
    healthValue: 5,
    happinessValue: 5,
    satietyValue: 3,
    healthUp() {
        this.healthValue++;
    },
    happyUp() {
        this.happinessValue++;
    },
    play() {
        this.satietyValue--;
        this.happinessValue--;
        this.healthValue--;
    },
    feedUp() {
        this.satietyValue++;
    },
    clean() {
        this.healthValue++;
    },
    shopping() {
        this.happinessValue++;
    },
    stateAnalyzer() {
        const isAlive = this.healthValue > 0
            && this.happinessValue > 0
            && this.satietyValue > 0;
        if (isAlive) {
            console.log(`Keep on. ${this.name} is still alive.`);
        } else {
            console.log(`Unfortunately, ${this.name} died. Game over.`);
        }
    },
};
tamagochi.play();
tamagochi.feedUp();
tamagochi.feedUp();
tamagochi.healthUp();
tamagochi.happyUp();
tamagochi.clean();
tamagochi.shopping();
tamagochi.play();
tamagochi.play();
tamagochi.play();
tamagochi.play();
tamagochi.play();
tamagochi.play();
tamagochi.play();
tamagochi.stateAnalyzer();
