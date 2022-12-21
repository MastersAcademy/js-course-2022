const tamagochi = {
    health: 10,
    happiness: 10,
    satiety: 10,

    play() {
        this.health -= 1;
        this.happiness += 1;
        this.satiety -= 1;
        this.displayStatus();
    },
    food() {
        this.health -= 1;
        this.happiness -= 1;
        this.satiety += 1;
        this.displayStatus();
    },
    sleep() {
        this.health += 1;
        this.happiness -= 1;
        this.satiety -= 1;
        this.displayStatus();
    },
    displayStatus() {
        if (this.health <= 0 || this.happiness <= 0 || this.satiety <= 0) {
            console.log('Game Over');
        } else {
            console.log('Tamagochi is alive');
        }
    },
};

tamagochi.play();
tamagochi.food();
tamagochi.sleep();
