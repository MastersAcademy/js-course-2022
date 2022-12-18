const tamagotchi = {
    health: 3,
    happiness: 3,
    satiety: 3,
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
        } else {
            if (this.health === 0) {
                console.log('Ur tamagotchi was too hungry, so he is dead. R.I.P.');
            }
            if (this.happiness === 0) {
                console.log('Ur tamagotchi died been too fat and in depression. R.I.P.');
            }
        }
    },
    feed() {
        if (!this.isDead()) {
            if (this.satiety === 3) {
                console.log('Ohhh, I\'m so full!');
                this.satiety--;
                this.health--;
                this.satiety--;
            } else {
                this.health++;
                this.satiety++;
                this.happiness--;
                console.log('MMMMMM, so yummy!!!');
            }
        } else {
            if (this.health === 0) {
                console.log('Ur tamagotchi was too hungry, so he is dead. R.I.P.');
            }
            if (this.happiness === 0) {
                console.log('Ur tamagotchi died been too fat and in depression. R.I.P.');
            }
        }
    },
};

/* Try to make him dead cuz of hunger */

tamagotchi.play();
tamagotchi.feed();
tamagotchi.feed();
tamagotchi.play();
tamagotchi.play();
tamagotchi.play();

/* Try to make him dead cuz of depression */

/* tamagotchi.play();
tamagotchi.feed();
tamagotchi.feed();
tamagotchi.feed();
tamagotchi.feed(); */

// Task with *

const mainTamagotchi = {
    health: 3,
    happiness: 3,
    satiety: 3,
    isDead() {
        if (this.health === 0) {
            return true;
        }
        if (this.satiety === 0) {
            return true;
        }
        if (this.happiness === 0) {
            return true;
        }
        return false;
    },
    play() {
        if (!this.isDead()) {
            if (this.happiness === 3) {
                console.log('I don\'t wanna play, i\'m happy!');
                this.happiness--;
                this.satiety--;
                this.health--;
            } else {
                this.satiety--;
                this.health--;
                this.happiness++;
                console.log('Yeah, I wanna play with ya!!!');
            }
        } else {
            if (this.health === 0) {
                console.log('Ur is dead. R.I.P.');
            }
            if (this.satiety === 0) {
                console.log('Ur tamagotchi died cuz of hunger. R.I.P.');
            }
            if (this.happiness === 0) {
                console.log('Ur tamagotchi died in depression. R.I.P.');
            }
        }
    },
    feed() {
        if (!this.isDead()) {
            if (this.satiety === 3) {
                console.log('Ohhh, I\'m so full!');
                this.satiety--;
                this.health--;
                this.satiety--;
            } else {
                this.health++;
                this.satiety++;
                this.happiness--;
                console.log('MMMMMM, so yummy!!!');
            }
        } else {
            if (this.health === 0) {
                console.log('Ur is dead. R.I.P.');
            }
            if (this.satiety === 0) {
                console.log('Ur tamagotchi died cuz of hunger. R.I.P.');
            }
            if (this.happiness === 0) {
                console.log('Ur tamagotchi died in depression. R.I.P.');
            }
        }
    },
};

Object.seal(mainTamagotchi);

const myTamagotchi = Object.create(mainTamagotchi);

myTamagotchi.name = 'Den';
myTamagotchi.health = 5;
myTamagotchi.favouriteDish = 'cookies';

console.log(myTamagotchi);

myTamagotchi.play();
myTamagotchi.play();
myTamagotchi.feed();
myTamagotchi.play();
myTamagotchi.play();
console.log(myTamagotchi.satiety);
myTamagotchi.play();
