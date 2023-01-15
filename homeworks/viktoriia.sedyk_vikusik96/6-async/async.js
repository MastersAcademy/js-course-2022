const tamagotchiMethods = ['play', 'eat', 'wash'];
const tamagotchiIndicators = ['health', 'happiness', 'satiety'];
const startTimer = new Date();

const tamagotchi = {
    health: 4,
    happiness: 3,
    satiety: 3,
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
        let result = false;
        tamagotchiIndicators.forEach((indicator) => {
            if (tamagotchi[indicator] <= 0) {
                result = indicator;
            }
        });

        return result;
    },

    showMessageIfTamagochiDied() {
        const valueWithZerpPoints = this.checkValues();
        if (valueWithZerpPoints) {
            console.log(`your tamagochi doesn't have enough ${valueWithZerpPoints}`);
        }
    },
};

const tamagotchiInterval = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * tamagotchiMethods.length);

    tamagotchi[tamagotchiMethods[randomNumber]]();
    // tamagotchiIndicators.forEach((indicator) => {
    //     if (tamagotchi[indicator] <= 0) {
    //         const stopTimer = Math.round((new Date() - startTimer) / 1000);
    //         clearInterval(tamagotchiInterval);
    //         console.log(`your tamagochi died after ${stopTimer} seconds`);
    //     }
    // });

    if (tamagotchi.checkValues()) {
        const stopTimer = Math.round((new Date() - startTimer) / 1000);
        clearInterval(tamagotchiInterval);
        console.log(`your tamagochi died after ${stopTimer} seconds`);
    }
}, 500);
