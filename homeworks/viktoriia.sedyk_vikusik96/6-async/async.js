const tamagotchiIndicators = ['health', 'happiness', 'satiety'];
let seconds = 0;

const timer = setInterval(() => {
    seconds++;
}, 1000);

const tamagotchi = {
    health: 4,
    happiness: 3,
    satiety: 3,
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
        tamagotchiIndicators.forEach((indicator) => {
            if (tamagotchi[indicator] <= 0) {
                console.log(`your tamagochi doesn't have enough ${indicator}`);
            }
        });
    },
};

console.log(tamagotchi, seconds, timer);
