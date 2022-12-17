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
        this.happiness += 1 * this.metabolism;
        this.agile -= 0.5 * this.metabolism;
    },
    heal() {
        this.health += 2.0 * this.metabolism;
        this.agile += 0.5 * this.metabolism;
    },
    showStats() {
        console.log('//*****************************/\n');
        console.log(
            `Ben's stats: 
        \n health: ${this.health}
        \n happiness: ${this.happiness}
        \n satiety: ${this.satiety}
        \n agile: ${this.agile} \n`,
        );
        console.log('//*****************************//');
    },
    damageCycle() {
        setInterval(() => {
            this.health -= 1;
            this.happiness -= 1;
            this.satiety -= 1;
            this.agile -= 1;
        }, 15 * 1000);
    },
    gameResult() {
        if (
            [this.health, this.happiness, this.satiety, this.agile].find(
                (val) => val <= 0,
            )
        ) {
            console.clear();
            console.log('\n Game over');
            process.exit();
        } else if (
            [this.health, this.happiness, this.satiety, this.agile].find(
                (val) => val < 10,
            )
        ) {
            return null;
        }
        console.clear();
        console.log('\n You won! Congrats!');
        return process.exit();
    },
    secretCheat() {
        this.happiness += 100;
        this.agile += 100;
        this.satiety += 100;
        this.health += 100;
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
                return console.log('No such function');
        }
    });
}

function runGame() {
    ben.damageCycle();
    setInterval(() => {
        console.clear();
        console.log(
            `Every 15 sec ben lose 1 hp from all stats
         \n If One of them will be equal to 0, he gonna die.
         \n Play, feed or heal him to balance stats.
         \n When they all would reach the score of 10,
         \n you'll win this game. \n`,
        );
        ben.showStats();
        userInput();
        ben.gameResult();
    }, 5 * 1000);
}

runGame();
