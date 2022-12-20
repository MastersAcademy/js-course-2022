const tamagochi = {
    name: 'Guchi',
    energy: 10,
    happiness: 10,
    satiety: 10,
    isStillAlive() {
        return this.energy > 0
        && this.happiness > 0
        && this.satiety > 0;
    },
    feed() {
        this.satiety++;
        this.happiness--;
        this.energy--;
        this.showMessage('It was delicious!');
    },
    play() {
        this.happiness++;
        this.satiety--;
        this.showMessage('wow, that was amazing, I want more!');
    },
    sleep() {
        this.energy += 2;
        this.satiety--;
        this.showMessage('Oiiio...bz!..');
        if (this.isStillAlive()) {
            setTimeout(this.showMessage('Good morning! let`s play?'), 500);
        }
    },
    showMessage(event) {
        const isGameOver = !this.isStillAlive();
        let message = 'I`m bored, play with me..';

        if (isGameOver) {
            message = 'Game over';
        } else if (this.satiety === 2) {
            message = 'I`m hungry, feed me';
        } else if (this.energy === 2) {
            message = 'I`m tired, I wont sleep';
        } else {
            message = event;
        }

        console.log(message);
    },
    start() {
        console.log(`Hi, I'm ${this.name}, play with me..`);
    },
};

const gochi = Object.create(tamagochi);
gochi.name = 'Gochi';
gochi.energy = 6;
gochi.happiness = 6;
gochi.satiety = 6;

const tuchi = Object.create(gochi);
tuchi.name = 'Tuchi';
tuchi.age = 16;

tuchi.start = function () {
    console.log(`Hi, I'm ${this.name}, I'm ${this.age} years old`);
};
