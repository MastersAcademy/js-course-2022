const tamagotchiMethods = ['play', 'eat', 'wash'];
const tamagotchiIndicators = ['health', 'happiness', 'satiety'];
const startTimer = new Date();

const tamagotchi = {
    health: 4,
    happiness: 3,
    satiety: 10,
    play() {
        this.happiness++;
        this.health--;
        this.satiety--;

        this.showMessageIfTamagochiDied();
    },
    eat() {
        this.satiety++;
        this.happiness++;
        this.health++;

        this.showMessageIfTamagochiDied();
    },
    wash() {
        this.satiety--;
        this.health++;
        this.happiness--;

        this.showMessageIfTamagochiDied();
    },
    checkValues() {
        return tamagotchiIndicators.find((indicator) => (tamagotchi[indicator] <= 0));
    },
    showMessageIfTamagochiDied() {
        const valueWithZeroPoints = this.checkValues();
        if (valueWithZeroPoints) {
            console.log(`your tamagochi doesn't have enough ${valueWithZeroPoints}`);
        }
    },
};

const tamagotchiInterval = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * tamagotchiMethods.length);
    tamagotchi[tamagotchiMethods[randomNumber]]();

    if (tamagotchi.checkValues()) {
        const stopTimer = Math.round((new Date() - startTimer) / 1000);
        clearInterval(tamagotchiInterval);
        console.log(`your tamagochi died after ${stopTimer} seconds`);
    }
}, 500);
