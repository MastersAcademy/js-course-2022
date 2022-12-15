const tamagotchi = {
    health: 4,
    happiness: 1,
    satiety: 5,
    play() {
        this.happiness++;
        this.health--;
        this.satiety--;

        this.cheackValues();
    },
    eat() {
        this.satiety++;
        this.happiness++;
        this.health++;

        this.cheackValues();
    },
    wash() {
        this.satiety--;
        this.health++;
        this.happiness--;

        this.cheackValues();
    },
    cheackValues() {
        if (this.happiness <= 0 || this.health <= 0 || this.satiety <= 0) {
            console.log('your tamagotchi died');
        }
    },
};

// second task

const barsik = Object.create(tamagotchi);

barsik.name = 'Barsik';
barsik.preferFood = 'fish';

barsik.eat = function (food) {
    if (food && food === this.preferFood) {
        this.satiety += 2;
        this.happiness += 2;
    } else {
        this.satiety++;
        this.happiness++;
    }
    this.health++;
    this.cheackValues();
};

barsik.eat('fish');
