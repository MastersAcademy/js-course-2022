const tamagotchi = {
    health: 3,
    happiness: 3,
    satiety: 3,
    timeOfLife: 0,
    isDead() {
        return this.health === 0 ? true : this.happiness === 0;
    },
    play() {
        if (!this.isDead()) {
            if (this.happiness === 3) {
                console.log('I don\'t wanna play i\'m happy!');
                this.happiness--;
                this.satiety--;
                this.health--;
            } else {
                this.satiety--;
                this.health--;
                this.happiness++;
                console.log('Yeah, I wanna play with ya!!!');
            }
        }
    },
    feed() {
        if (!this.isDead()) {
            if (this.satiety === 3) {
                console.log('Ohhh, I\'m so full!');
                this.satiety--;
                this.health--;
                this.happiness--;
            } else {
                this.health++;
                this.satiety++;
                this.happiness--;
                console.log('MMMMMM, so yummy!!!');
            }
        }
    },
};

function getRandomAction() {
    let randomInt = Math.floor(Math.random() * 2);
    randomInt === 0 ? tamagotchi.play() : tamagotchi.feed();
}

const interval = setInterval(() => {
    if (tamagotchi.isDead()) {
        console.log(`Your tamagotchi is dead, his lifetime is ${tamagotchi.timeOfLife} seconds`);
        clearInterval(interval);
    }
    tamagotchi.timeOfLife += 0.5;
    getRandomAction();
}, 500);
