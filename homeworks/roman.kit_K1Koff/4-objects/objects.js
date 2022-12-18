const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Loading...');

const ben = {
    metabolism: 1, //  0,5 ... k ... 1,5
    health: 5,
    happiness: 5,
    satiety: 5,
    agile: 5,
    favouriteFood: 'Apple',

    play() {
        this.happiness += 0.5 * this.metabolism;
        this.agile += 2 * this.metabolism;
        this.satiety -= 0.5 * this.metabolism;
    },
    feed() {
        this.satiety += 2.5 * this.metabolism;
        this.health += 0.5 * this.metabolism;
        this.happiness += this.metabolism;
        this.agile -= 0.5 * this.metabolism;
    },
    heal() {
        this.health += 2.0 * this.metabolism;
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
    secretCheat() {
        this.happiness += 100;
        this.agile += 100;
        this.satiety += 100;
        this.health += 100;
    },
    showStats() {
        console.log(
            `
Every 15 sec Ben lose 1 hp from all stats.
If One of them will be equal to 0, he gonna die.
Play, feed or heal him to balance stats.
When they all would reach the score of 10,
you'll win this game.
/*****************************/
Ben's stats: 
health: ${this.health}
happiness: ${this.happiness}
satiety: ${this.satiety}
agile: ${this.agile}
//*****************************//
            `,
        );
    },
};

function userInput() {
    rl.question('Do something! (play/feed/heal) ', (answer) => {
        switch (answer) {
            case 'play':
                return ben.play();
            case 'feed':
                return ben.feed();
            case 'heal':
                return ben.heal();
            case 'apple':
                return ben.secretCheat();
            default:
                return console.error('No such function');
        }
    });
}

function runGame() {
    const damageInterval = setInterval(() => {
        ben.damage();
    }, 15 * 1000);
    const userActionInterval = setInterval(() => {
        console.clear();
        ben.showStats();
        userInput();
        if (ben.isDead() || ben.isWin()) {
            console.clear();
            clearInterval(damageInterval);
            clearInterval(userActionInterval);
            if (ben.isDead()) { console.log('YOU LOST!'); }
            if (ben.isWin()) { console.log('YOU WON!'); }
            rl.close();
        }
    }, 5 * 1000);
}

runGame();
