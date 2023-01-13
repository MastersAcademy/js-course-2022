function Tamagochi(initHealth = 3, initHappiness = 3, initSatiety = 3) {
    this.lifeStartedTmestamp = Date.now();
    this.health = initHealth;
    this.happiness = initHappiness;
    this.satiety = initSatiety;
    this.checkParams = () => {
        if (this.health < 1) {
            this.breakLifeCycle('health');
        }
        if (this.happiness < 1) {
            this.breakLifeCycle('happiness');
        }
        if (this.satiety < 1) {
            this.breakLifeCycle('satiety');
        }
    };
    this.getRandomNumber = () => Math.ceil((Math.random() * 10) / 3.3333);
    this.logParams = (functilName) => console.log(`${functilName} is called. Health is:
         ${this.health}, Happiness is:
         ${this.happiness},Satiety is:
         ${this.satiety}`);
    this.increaseHealth = () => {
        this.health += 3;
        this.happiness -= 1;
        this.satiety -= 1;
        this.logParams('increaseHealth');
    };

    this.increaseHappiness = () => {
        this.happiness += 3;
        this.health -= 1;
        this.satiety -= 1;
        this.logParams('increaseHappiness');
    };

    this.increaseSatiety = () => {
        this.satiety += 3;
        this.happiness -= 1;
        this.health -= 1;
        this.logParams('increaseSatiety');
    };
    this.breakLifeCycle = (param) => {
        clearInterval(this.intervalId);
        console.log(
            `Sorry, but ${param} is to low. Lifetime was ${(Date.now() - this.lifeStartedTmestamp) / 1000} seconds`,
        );
    };
    this.lifeCycle = () => {
        const randomNumber = this.getRandomNumber();
        if (randomNumber === 1) {
            this.increaseHealth();
        }
        if (randomNumber === 2) {
            this.increaseHappiness();
        }
        if (randomNumber === 3) {
            this.increaseSatiety();
        }
        this.checkParams();
    };
    this.startLifeCycle = () => {
        this.intervalId = setInterval(this.lifeCycle, 500);
    };
    this.startLifeCycle();
}

// create object instance   -3
const pet1 = new Tamagochi(6, 6, 6);
console.log(pet1);
