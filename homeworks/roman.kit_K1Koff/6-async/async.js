console.log('Loading...');

const ben = {
    metabolism: 1,
    health: 5,
    happiness: 5,
    satiety: 5,
    agile: 5,

    play() {
        this.happiness += 0.5 * this.metabolism;
        this.agile += this.metabolism;
        this.satiety -= this.metabolism;
    },
    feed() {
        this.satiety += 1.5 * this.metabolism;
        this.health += 0.5 * this.metabolism;
        this.happiness += this.metabolism;
        this.agile -= 0.5 * this.metabolism;
    },
    heal() {
        this.health += this.metabolism;
        this.agile += 0.5 * this.metabolism;
    },
    damage() {
        this.health -= 1;
        this.happiness -= 1;
        this.satiety -= 1;
        this.agile -= 1;
    },
    isDead() {
        const mainParams = [this.health, this.happiness, this.satiety, this.agile];

        return mainParams.some((val) => val <= 0);
    },
    isWin() {
        const mainParams = [this.health, this.happiness, this.satiety, this.agile];

        return mainParams.every((val) => val >= 10);
    },
    showStats() {
        console.log(
            `
Every 2.5 sec Ben lose 1 hp from all stats.
Once every 0.5 sec the dice will be rolled,
this will call one of the actions (feed/play/heal)
When they all would reach the score of 10,
you'll win this game. In case of reaching zero,
you'll lose

Ben's stats: 
health: ${this.health}
happiness: ${this.happiness}
satiety: ${this.satiety}
agile: ${this.agile}
`,
        );
    },
};

function getRandomFunction() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            console.log('Played');
            return ben.play();
        case 1:
            console.log('Fed');
            return ben.feed();
        case 2:
            console.log('Healed');
            return ben.heal();
        default:
            return null;
    }
}

function runGame() {
    const timeAtStart = Date.now();
    const damageInterval = setInterval(() => { ben.damage(); }, 2.5 * 1000);
    const playInterval = setInterval(() => {
        console.clear();
        ben.showStats();
        getRandomFunction();

        if (ben.isDead() || ben.isWin()) {
            const playTime = Math.floor((Date.now() - timeAtStart) / 100) / 10;

            console.clear();
            clearInterval(damageInterval);
            clearInterval(playInterval);

            if (ben.isDead()) { console.log(`YOU LOST in ${playTime} seconds!`); }
            if (ben.isWin()) { console.log(`YOU WON in ${playTime} seconds!`); }
        }
    }, 500);
}

runGame();
