const tamagochiDefault = {
    name: '',
    health: 5,
    happiness: 5,
    satiety: 5,
};

const tamagochiPlays = {
    isAlive() {
        const lifeIndicator = Object.keys(this).find((key) => this[key] === 0);
        if (lifeIndicator) {
            console.log(`The ${lifeIndicator} is over !!!! ${this.name}, R.I.P.`);
        }
    },
    eat() {
        this.satiety++;
        this.happiness--;
        this.isAlive(this);
    },
    sport() {
        this.health++;
        this.satiety--;
        this.isAlive(this);
    },
    play() {
        this.happiness++;
        this.health--;
        this.isAlive(this);
    },
};

const cat = Object.create(tamagochiPlays, {});
Object.assign(cat, { ...tamagochiDefault });

cat.name = 'Barsik';
cat.food = 'milk';

cat.eat();
cat.play();
cat.sport();
cat.play();
cat.play();
cat.play();
cat.play();
cat.play();
console.log(cat);
