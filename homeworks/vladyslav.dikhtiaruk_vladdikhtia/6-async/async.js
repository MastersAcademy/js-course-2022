console.clear();
const tamagotchi = {
    name: 'Tamagotchi',
    healthMeter: 10, // from 0-10
    hungerMeter: 5, // from 10-0
    happyMeter: 10, // from 0-10
    careMeter: 10, // from 0-10

    checkTamagotchi() {
        const parameteres = `${this.name}:
        health = ${this.healthMeter}
        hungry = ${this.hungerMeter}
        happy = ${this.happyMeter}
        care = ${this.careMeter}`;

        console.log(parameteres);
    },

    feed() {
        this.hungerMeter = 0;
        this.healthMeter += 1;
        this.happyMeter += 1;
        this.careMeter -= 2;
        if (this.careMeter <= 0) {
            console.log('Your pet is dead, because of careless');
        }
        console.log('I am full');

        this.checkTamagotchi();
    },

    play() {
        this.healthMeter -= 1;
        this.hungerMeter += 2;
        this.happyMeter += 2;
        this.careMeter += 1;
        if (this.healthMeter <= 0) {
            console.log('Your pet is dead, because of health');
        }
        if (this.hungerMeter > 9) {
            console.log('Your pet is dead, because of hunger');
        }
        console.log('I am happy, I have enjoyed a lot');

        this.checkTamagotchi();
    },

    clean() {
        this.healthMeter += 1;
        this.happyMeter += 1;
        this.hungerMeter += 1;
        this.careMeter = 10;
        if (this.hungerMeter > 9) {
            console.log('Your pet is dead, because of hunger');
        }
        console.log('I am clean');
        this.checkTamagotchi();
    },

    training() {
        this.happyMeter += 1;
        this.healthMeter += 2;
        this.hungerMeter += 3;
        this.careMeter -= 2;
        if (this.hungerMeter > 9) {
            console.log('Your pet is dead, because of hunger');
        }
        console.log('I am healthy, training was good');
        this.checkTamagotchi();
    },

    sleep() {
        this.happyMeter -= 3;
        this.healthMeter += 3;
        this.hungerMeter -= 2;
        this.careMeter -= 1;
        if (this.happyMeter <= 0) {
            console.log('Your pet is dead, because of unhappiness');
        }
        if (this.hungerMeter > 9) {
            console.log('Your pet is dead, because of hunger');
        }
        if (this.careMeter <= 0) {
            console.log('Your pet is dead, because of careless');
        }
        console.log('I am not sleepy and ready to live one more day');
        this.checkTamagotchi();
    },

    randomValues() {
        const value = Math.floor(Math.random() * 5);
        if (value === 0) {
            this.feed();
        } else if (value === 1) {
            this.play();
        } else if (value === 2) {
            this.clean();
        } else if (value === 3) {
            this.training();
        } else {
            this.sleep();
        }
    },
};

let life = 0;

const start = new Promise((resolve, reject) => {
    const game = setInterval(() => {
        tamagotchi.randomValues();
        life += 0.5; // plus 0.5second after every action
        if (tamagotchi.healthMeter <= 0 || tamagotchi.hungerMeter > 9 || tamagotchi.happyMeter <= 0 || tamagotchi.careMeter <= 0) {
            clearInterval(game);
            resolve(life);
        }
    }, 500);
});

start.then((life) => {
    console.log(`${tamagotchi.name} was alive: ${life} seconds`);
});

