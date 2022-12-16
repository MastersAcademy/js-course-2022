function CreateObject(name) {
    return {
        name,
        helthCount: 100,
        helthStr: 'Good',
        listToNeed: {
            sleep: 100,
            eat: 100,
            drink: 100,
            rest: 100,
            play: 100,
        },
        sleep(duration) {
            this.listToNeed.sleep += duration;
            this.listToNeed.sleep = Math.min(100, this.listToNeed.sleep);
            this.listToNeed.rest += duration;
            this.listToNeed.rest = Math.min(100, this.listToNeed.rest);
            this.listToNeed.drink -= 0.5 * duration;
            this.listToNeed.eat -= 0.5 * duration;
            this.listToNeed.play -= 0.5 * duration;
        },
        eat(duration) {
            this.listToNeed.eat += 10 * duration;
            this.listToNeed.eat = Math.min(100, this.listToNeed.eat);
            this.listToNeed.sleep -= duration;
            this.listToNeed.drink -= duration;
            this.listToNeed.play -= duration;
        },
        drink(duration) {
            this.listToNeed.drink += 10 * duration;
            this.listToNeed.drink = Math.min(100, this.listToNeed.drink);
            this.listToNeed.sleep -= duration;
            this.listToNeed.drink -= duration;
            this.listToNeed.play -= duration;
        },
        rest(duration) {
            this.listToNeed.rest += duration;
            this.listToNeed.rest = Math.min(100, this.listToNeed.rest);
            this.listToNeed.sleep -= duration;
            this.listToNeed.eat -= 0.5 * duration;
            this.listToNeed.drink -= 0.5 * duration;
            this.listToNeed.play -= duration;
        },
        play(duration) {
            this.listToNeed.play += duration;
            this.listToNeed.play = Math.min(100, this.listToNeed.play);
            this.listToNeed.sleep -= duration;
            this.listToNeed.eat -= duration;
            this.listToNeed.drink -= duration;
        },
        checkHelth() {
            let maxTotal = 0;
            let total = 0;
            const keys = Object.keys(this.listToNeed);
            keys.forEach((key) => {
                maxTotal += 100;
                total += this.listToNeed[key];
            });
            this.helthCount = Math.round((total / maxTotal) * 100);
            if (this.helthCount > 80) {
                this.helthStr = 'Perfect';
            } else if (this.helthCount > 40) {
                this.helthStr = 'Good';
            } else if (this.helthCount > 0) {
                this.helthStr = 'Bad';
            } else {
                this.helthStr = 'Dead';
            }
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

console.log(tamagochi);
console.log(tomaGochi);
console.log(sirko.name, sirko.colour, sirko.helthStr);
