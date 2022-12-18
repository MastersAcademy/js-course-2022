function CreateObject(name) {
    return {
        name,
        helthNumber: 100,
        helthStr: 'Good',
        helthIndicators: {
            sleep: 100,
            eat: 100,
            drink: 100,
            rest: 100,
            play: 100,
        },
        changeIndicator(object, key, duration, koef) {
            object[key] += duration * koef;
            if (koef > 0) {
                object[key] = Math.min(100, object[key]);
            }
        },
        sleep(duration) {
            this.changeIndicator(this.helthIndicators, 'sleep', duration, 1);
            this.changeIndicator(this.helthIndicators, 'rest', duration, 1);
            this.changeIndicator(this.helthIndicators, 'drink', duration, -0.5);
            this.changeIndicator(this.helthIndicators, 'eat', duration, -0.5);
            this.changeIndicator(this.helthIndicators, 'play', duration, -0.5);
        },
        eat(duration) {
            this.changeIndicator(this.helthIndicators, 'eat', duration, 10);
            this.changeIndicator(this.helthIndicators, 'sleep', duration, -1);
            this.changeIndicator(this.helthIndicators, 'drink', duration, -1);
            this.changeIndicator(this.helthIndicators, 'play', duration, -1);
        },
        drink(duration) {
            this.changeIndicator(this.helthIndicators, 'drink', duration, 10);
            this.changeIndicator(this.helthIndicators, 'sleep', duration, -1);
            this.changeIndicator(this.helthIndicators, 'drink', duration, -1);
            this.changeIndicator(this.helthIndicators, 'play', duration, -1);
        },
        rest(duration) {
            this.changeIndicator(this.helthIndicators, 'rest', duration, 10);
            this.changeIndicator(this.helthIndicators, 'sleep', duration, -0.5);
            this.changeIndicator(this.helthIndicators, 'eat', duration, -0.5);
            this.changeIndicator(this.helthIndicators, 'drink', duration, -0.5);
            this.changeIndicator(this.helthIndicators, 'play', duration, -1);
        },
        play(duration) {
            this.changeIndicator(this.helthIndicators, 'play', duration, 1);
            this.changeIndicator(this.helthIndicators, 'sleep', duration, -1);
            this.changeIndicator(this.helthIndicators, 'eat', duration, -1);
            this.changeIndicator(this.helthIndicators, 'drink', duration, -1);
        },
        checkHelth() {
            const calculateHelthNumber = () => {
                let maxTotal = 0;
                let total = 0;
                const keys = Object.keys(this.helthIndicators);
                keys.forEach((key) => {
                    maxTotal += 100;
                    total += this.helthIndicators[key];
                });
                return Math.round((total / maxTotal) * 100);
            };
            const calculateHelthStr = () => {
                if (this.helthCount > 80) return 'Perfect';
                if (this.helthCount > 40) return 'Good';
                if (this.helthCount > 0) return 'Bad';
                return 'Dead';
            };
            this.helthNumber = calculateHelthNumber();
            this.helthStr = calculateHelthStr();
        },
    };
}
const tamagochi = CreateObject('TomCat');
tamagochi.play(30);
tamagochi.play(20);
tamagochi.eat(10);
tamagochi.drink(5);
tamagochi.rest(30);
tamagochi.sleep(50);
tamagochi.eat(30);
tamagochi.drink(20);
tamagochi.checkHelth();

const tomaGochi = CreateObject('SheCat');
tomaGochi.play(20);
tomaGochi.eat(10);
tomaGochi.drink(5);
tomaGochi.checkHelth();

const sirko = Object.create(CreateObject('Sirko'));
sirko.colour = 'Red';
sirko.breed = 'mastiff';
sirko.play(50);
sirko.checkHelth();
sirko.sleep(50);
console.log(tamagochi);
console.log(tomaGochi);
console.log(sirko.name, sirko.colour, sirko.helthIndicators.sleep);
console.log(sirko.helthIndicators);
