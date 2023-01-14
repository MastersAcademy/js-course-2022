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
    }

    eat() {
        this.health = this.validateNumber(this.health - getNumber(0, 3));
        this.satiety = this.validateNumber(this.satiety + getNumber(0, 10));
        this.energy = this.validateNumber(this.energy - getNumber(0, 3));
    }

    validateNumber(number) {
        return Math.max(0, Math.min(100, number));
    }

    sleep() {
        this.health = this.validateNumber(this.health - getNumber(0, 3));
        this.satiety = this.validateNumber(this.satiety - getNumber(0, 3));
        this.energy = this.validateNumber(this.energy + getNumber(0, 10));
    }

    play() {
        const newHappiness = this.happiness + getNumber(0, 10);
        this.happiness = newHappiness >= 100 ? 100 : newHappiness;
        if (getNumber(0, 100) <= 3) {
            this._die();
            return;
        }
        if (this.energy < 10 || this.satiety < 10) {
            console.log(`Сannot be played with ${this.name}! Your pet need to sleep!`);
            this.getStatus();
        }
    }

    getStatus() {
        const status = `Name: ${this.name}
            Health: ${this.health}
            Happiness: ${this.happiness}
            Satiety: ${this.satiety}
            Energy: ${this.energy}`;

        console.log(status);
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
    const lifeInterval = setInterval(() => {
        duration += 1;
        if (!myPet._checkIsAlive()) {
            clearInterval(lifeInterval);
            this._die();
            resolve(duration);
        }
    }, 500);
});

startGame.then((duration) => {
    console.log(`Game over! Your tamagochi ${this.name} lived for ${duration} seconds.`);
});
