const tamagochi = {
    name: 'Pikachu',
    health: 10,
    satiety: 10,
    happiness: 10,
    wealth: 10,
    get alive() {
        return this.health > 1 && this.satiety > 1 && this.happiness > 1 && this.wealth > 1;
    },
    // eslint-disable-next-line consistent-return
    doExercise() {
        if (!this.alive) {
            console.log('Your tamagochi is not alive!');
            return console.log('Game over!');
        }

        this.health++;
        if (this.health > 1) {
            console.log('Let\'s do exercise!');
        } else {
            console.log('Wow, I\'m fine!');
        }

        this.getStatus();
    },
    // eslint-disable-next-line consistent-return
    getPlay() {
        if (!this.alive) {
            console.log('Your tamagochi is not alive!');
            return console.log('Game over!');
        }

        this.health--;
        this.satiety--;
        this.wealth--;

        if (this.health < 1 || this.satiety < 1 || this.wealth < 1) {
            console.log('Sorry, I\'m tired!');
        } else {
            console.log('Wow, I\'m fine!');
        }

        this.getStatus();
    },
    // eslint-disable-next-line consistent-return
    getFull() {
        if (!this.alive) {
            console.log('Your tamagochi is not alive!');
            return console.log('Game over!');
        }
        this.satiety++;
        this.happiness++;

        if (this.satiety > 1 || this.happiness > 1) {
            console.log('Wow, I\'m fine!');
        } else {
            console.log('Oh, I\'m hungry!');
        }

        this.getStatus();
    },
    // eslint-disable-next-line consistent-return
    doShopping() {
        if (!this.alive) {
            console.log('Your tamagochi is not alive!');
            return console.log('Game over!');
        }
        this.happiness++;
        this.wealth--;

        if (this.happiness > 1 || this.wealth < 5) {
            console.log('Wow, I\'m happy!');
        } else {
            console.log('Oh, I\'m a waste!');
        }

        this.getStatus();
    },
    // eslint-disable-next-line consistent-return
    doWealth() {
        if (!this.alive) {
            console.log('Your tamagochi is not alive!');
            return console.log('Game over!');
        }
        this.wealth++;

        if (this.wealth > 10) {
            console.log('Wow, I\'m rich!');
        } else {
            console.log('Oh, I\'m poor!');
        }

        this.getStatus();
    },
    getStatus() {
        const status = `Name: ${this.name}`
            + `Health: ${this.health}`
            + `Satiety: ${this.satiety}`
            + `Happiness: ${this.happiness}`
            + `Wealth: ${this.wealth}`;
        if (this.health <= 1 || this.satiety <= 1 || this.wealth <= 1) {
            console.log(`Your tamagochi ${this.name} got sick and died!`);
        } if (this.satiety <= 1 || this.happiness <= 1) {
            console.log(`Your tamagochi ${this.name} was hungry and died!`);
            // eslint-disable-next-line max-len
        } if (this.health >= 10 && this.satiety >= 10 && this.happiness >= 10 && this.wealth >= 10) {
            console.log(`Your tamagochi ${this.name} win!`);
        }
        console.log(status);
    },
};

Object.keys(tamagochi);

tamagochi.sayHello = function () {
    console.log(`Hello, guys! My name is ${this.name}!`);
};

tamagochi.sayHello();
tamagochi.doExercise();
tamagochi.getPlay();
tamagochi.getFull();
tamagochi.doShopping();
tamagochi.doShopping();
tamagochi.doShopping();
tamagochi.doShopping();
tamagochi.doShopping();
tamagochi.doWealth();
tamagochi.doWealth();
tamagochi.doWealth();
tamagochi.doWealth();
tamagochi.doWealth();
tamagochi.doWealth();
tamagochi.doWealth();
tamagochi.getStatus();
