const tamagochi = {
    health: 5,
    happiness: 5,
    satiety: 3,
    healthUp() {
        this.health++;
    },
    helthDown() {
        this.health--;
        this.happinessDown();
    },
    happinessUp() {
        this.happiness++;
    },
    happinessDown() {
        this.happiness--;
    },
    satietyUp() {
        this.satiety++;
    },
    satietyDown() {
        this.satiety--;
    },
    eat() {
        this.satietyUp();
        this.healthUp();
    },
    play() {
        this.helthDown();
        this.satietyDown();
        this.happinessUp();

        if (!this.health || !this.happiness || !this.satiety) {
            console.log('Game over');
        } else if (this.satiety === 1) {
            console.log('I`m hungry');
        } else {
            console.log('Wow, that was cool!');
        }
    },
};

tamagochi.play();
tamagochi.play();
tamagochi.eat();
tamagochi.eat();
tamagochi.eat();
tamagochi.play();
tamagochi.play();
