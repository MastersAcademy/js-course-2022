const tamagochiDefault = {
    name: '',
    health: 5,
    happiness: 5,
    satiety: 5,
};

const isAlive = (tamagochi) => {
    const lifeIndicator = Object.keys(tamagochi).find((key) => tamagochi[key] === 0);
    if (lifeIndicator) {
        console.log(`The ${lifeIndicator} is over !!!! ${tamagochi.name}, R.I.P.`);
    }
};

const tamagochiPlays = {
    eat() {
        this.satiety++;
        this.happiness--;
        isAlive(this);
    },
    sport() {
        this.health++;
        this.satiety--;
        isAlive(this);
    },
    play() {
        this.happiness++;
        this.health--;
        isAlive(this);
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
