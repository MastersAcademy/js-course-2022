console.clear();
const tamagotchi = {
    name: 'Tamagotchi',
    healthMeter: 10, // from 0-10
    hungerMeter: 2, // from 10-0
    happyMeter: 10, // from 0-10
    careMeter: 10, // from 0-10

    feed() {
        this.hungerMeter = 0;
        this.healthMeter += 1;
        this.happyMeter += 1;
        this.careMeter -= 2;
        if (this.careMeter <= 0) {
            console.log('Your pet is dead, because of careless');
        }
        console.log('I am full');
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
    },
};
console.log('We are ready to play!!!');
console.log(tamagotchi.name);
tamagotchi.feed();
tamagotchi.play();
tamagotchi.clean();
tamagotchi.training();
tamagotchi.sleep();
tamagotchi.training();
tamagotchi.training(); // dead

const dog = Object.create(tamagotchi);
dog.name = 'Jordan';
dog.healthMeter = 6;
dog.happyMeter = 10;
dog.voice = function () {
    console.log('gav gav');
};

console.log('\n\n\n');
console.log(dog.name);
dog.feed();
console.log(dog);
dog.play();
dog.voice();
