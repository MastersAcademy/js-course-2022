const tamagochiDefault = {
    name: '',
    health: 5,
    happiness: 5,
    satiety: 5,
};
const arrPlaying = ['eat', 'sport', 'play'];

const setRandomFunction = (hero) => {
    setTimeout(() => {
        hero[arrPlaying[Math.floor(Math.random() * arrPlaying.length)]]();
    }, 500);
};

const tamagochiPlays = {
    isAlive(action) {
        const lifeIndicator = Object.keys(this)
            .find((key) => this[key] <= 0);
        if (lifeIndicator) {
            console.log(`The ${lifeIndicator} is over !!!! ${this.name}, R.I.P.`);
        } else {
            console.log(` ${action} (satiety: ${this.satiety}, happiness: ${this.happiness}, health: ${this.health})`);
            setRandomFunction(this);
        }
    },
    eat() {
        this.satiety += 2;
        this.happiness--;
        this.health--;
        this.isAlive('eat');
    },
    sport() {
        this.health += 2;
        this.satiety--;
        this.happiness--;
        this.isAlive('sport');
    },
    play() {
        this.happiness += 2;
        this.health--;
        this.satiety--;
        this.isAlive('play');
    },
};

const cat = Object.create(tamagochiPlays, {});
Object.assign(cat, { ...tamagochiDefault });
cat.name = 'Barsik';

setRandomFunction(cat);
