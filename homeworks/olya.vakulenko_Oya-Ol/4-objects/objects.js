const tamagochi = {
    name: 'Pikachu',
    health: 5,
    satiety: 5,
    happiness: 5,
    wealth: 5,
    get alive() {
        return this.health > 1 && this.satiety > 1 && this.happiness > 1 && this.wealth > 1;
    },
    get win() {
        return this.health >= 10 && this.satiety >= 10 && this.happiness >= 10 && this.wealth >= 10;
    },
    doExercise() {
        if (!this.alive) {
            console.log('Your tamagochi is not alive! Game over!');
            return this;
        }
        this.health++;
        if (this.health > 1) {
            console.log('Let\'s do exercise!');
        } else {
            console.log('Wow, I\'m fine!');
        }
        if (!this.alive) {
            console.log('Your tamagochi is not alive! Game over!');
            return this;
        }
        if (this.win) {
            console.log(`Your tamagochi ${this.name} win!`);
            return this;
        }
        this.getStatus();
        return this;
    },
    getPlay() {
        if (!this.alive) {
            console.log('Your tamagochi is not alive! Game over!');
            return this;
        }

        this.health--;
        this.satiety--;
        this.wealth--;

        if (this.health < 1 || this.satiety < 1 || this.wealth < 1) {
            console.log('Sorry, I\'m tired!');
        } else {
            console.log('Wow, I\'m fine!');
        }
        if (!this.alive) {
            console.log('Your tamagochi is not alive! Game over!');
            return this;
        }
        if (this.win) {
            console.log(`Your tamagochi ${this.name} win!`);
            return this;
        }

        this.getStatus();
        return this;
    },
    getFull() {
        if (!this.alive) {
            console.log('Your tamagochi is not alive! Game over!');
            return this;
        }
        this.satiety++;
        this.happiness++;

        if (this.satiety > 1 || this.happiness > 1) {
            console.log('Wow, I\'m fine!');
        } else {
            console.log('Oh, I\'m hungry!');
        }
        if (!this.alive) {
            console.log('Your tamagochi is not alive! Game over!');
            return this;
        }
        if (this.win) {
            console.log(`Your tamagochi ${this.name} win!`);
            return this;
        }

        this.getStatus();
        return this;
    },
    doShopping() {
        if (!this.alive) {
            console.log('Your tamagochi is not alive! Game over!');
            return this;
        }
        this.happiness++;
        this.wealth--;

        if (this.happiness > 1 || this.wealth < 5) {
            console.log('Wow, I\'m happy!');
        } else {
            console.log('Oh, I\'m a waste!');
        }
        if (!this.alive) {
            console.log('Your tamagochi is not alive! Game over!');
            return this;
        }
        if (this.win) {
            console.log(`Your tamagochi ${this.name} win!`);
            return this;
        }

        this.getStatus();
        return this;
    },
    doWealth() {
        if (!this.alive) {
            console.log('Your tamagochi is not alive! Game over!');
            return this;
        }
        this.wealth++;

        if (this.wealth > 10) {
            console.log('Wow, I\'m rich!');
        } else {
            console.log('Oh, I\'m poor!');
        }
        if (!this.alive) {
            console.log('Your tamagochi is not alive! Game over!');
            return this;
        }
        if (this.win) {
            console.log(`Your tamagochi ${this.name} win!`);
            return this;
        }

        this.getStatus();
        return this;
    },
    sayHello() {
        console.log(`Hello, guys! My name is ${this.name}!`);
        return this;
    },
    getStatus() {
        const status = `Name: ${this.name} `
            + `Health: ${this.health} `
            + `Satiety: ${this.satiety} `
            + `Happiness: ${this.happiness} `
            + `Wealth: ${this.wealth} `;
        if (this.health <= 1 || this.satiety <= 1 || this.wealth <= 1) {
            console.log(`Your tamagochi ${this.name} got sick and died!`);
        } if (this.satiety <= 1 || this.happiness <= 1) {
            console.log(`Your tamagochi ${this.name} was hungry and died!`);
        }
        console.log(status);
        return this;
    },
};

Object.keys(tamagochi);

tamagochi.sayHello().doExercise().getPlay().getFull()
    .doShopping()
    .doWealth()
    .getStatus();
