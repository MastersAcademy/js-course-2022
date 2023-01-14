function getNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Pet {
    constructor(name) {
        this.name = name;
        this.health = getNumber(0, 100);
        this.happiness = getNumber(0, 100);
        this.satiety = getNumber(0, 100);
        this.energy = getNumber(0, 100);

        const lifeInterval = setInterval(() => {
            this.health = getNumber(0, 5);
            this.satiety -= getNumber(0, 1);
            this.happiness -= getNumber(0, 1);
            this.energy -= getNumber(0, 5);

            if (!this._checkIsAlive()) {
                clearInterval(lifeInterval);
                this._die();
            }
        }, 500);
    }

    heal() {
        this.health = this.validateNumber(this.health + getNumber(0, 10));
        this.satiety = this.validateNumber(this.satiety - getNumber(0, 3));
        this.energy = this.validateNumber(this.energy - getNumber(0, 3));
        console.log('You can heal Pikachu! (used the method HEAL)');
        this.getStatus();
    }

    eat() {
        this.health = this.validateNumber(this.health - getNumber(0, 3));
        this.satiety = this.validateNumber(this.satiety + getNumber(0, 10));
        this.energy = this.validateNumber(this.energy - getNumber(0, 3));
        console.log('You have to feed Pikachu! (used the method EAT)');
        this.getStatus();
    }

    sleep() {
        this.health = this.validateNumber(this.health - getNumber(0, 3));
        this.satiety = this.validateNumber(this.satiety - getNumber(0, 3));
        this.energy = this.validateNumber(this.energy + getNumber(0, 10));
        console.log('You can put Pikachu to sleep! (used the method SLEEP)');
        this.getStatus();
    }

    play() {
        this.happiness = this.validateNumber(this.health + getNumber(0, 10));
        this.satiety = this.validateNumber(this.satiety - getNumber(0, 3));
        this.energy = this.validateNumber(this.energy - getNumber(0, 3));
        console.log('You can to play Pikachu! (used the method PLAY)');
        this.getStatus();
    }

    getStatus() {
        const status = `Name: ${this.name}
            Health: ${this.health}
            Happiness: ${this.happiness}
            Satiety: ${this.satiety}
            Energy: ${this.energy}`;

        console.log(status);
    }

    validateNumber(number) {
        return Math.max(0, Math.min(100, number));
    }

    _die() {
        console.log(`${this.name} is die!`);
    }

    _checkIsAlive() {
        return this.health > 1 && this.happiness > 1 && this.energy > 1 && this.satiety > 1;
    }

    _getWin() {
        if (
            this.health >= 100
            && this.happiness >= 100
            && this.satiety >= 100
            && this.energy >= 100
        ) {
            console.log(`Your tamagochi ${this.name} win! Congratulations!`);
            this.getStatus();
        } else {
            this._die();
        }
    }
}

const myPet = new Pet('Pikachu');

const startGame = new Promise((resolve) => {
    let duration = 0;
    myPet.heal();
    myPet.eat();
    myPet.sleep();
    myPet.play();
    const lifeInterval = setInterval(() => {
        duration += 0.5;
        if (!myPet._checkIsAlive()) {
            clearInterval(lifeInterval);
            myPet._die();
            resolve(duration);
        }
    }, 500);
});

startGame.then((duration) => {
    console.log(`Game over! Your tamagochi ${myPet.name} lived for ${duration} seconds.`);
});
