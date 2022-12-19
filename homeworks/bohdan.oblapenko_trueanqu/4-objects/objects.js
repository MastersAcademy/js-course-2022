function getMinutesDiff(startDate, endDate) {
    const msInMinute = 60 * 1000;

    return Math.round(
        Math.abs(endDate - startDate) / msInMinute,
    );
}

function transformMinsToMs(mins) {
    return mins * 1000 * 60;
}

function logSystemMessage(message) {
    console.info(`** ${message} **`);
}

const baseTamagochi = {
    health: 100,
    mood: 50,
    satiety: 100,
    favouriteFood: 'lasagna',
    isAlive: true,
    isSleeping: false,
    lastFellAsleep: Date.now(),
    sleepTimerId: null,
    canInteract() {
        return this.isAlive && !this.isSleeping;
    },
    logInactiveReason() {
        if (this.canInteract()) return;

        if (!this.isAlive) {
            logSystemMessage('Your beloved tamagochi friend has unfortunately left our beautiful world. Take better care of it next time');
            return;
        }

        if (this.isSleeping) {
            logSystemMessage('Sleeping. Z-z-Z-z-Z-z-Z-z-Z...');
        }
    },
    changeParamValue(paramName, value) {
        if (!(paramName in this)) { return; }

        if (this[paramName] + value >= 100) {
            this[paramName] = 100;
            return;
        }

        if (this[paramName] + value <= 0) {
            this[paramName] = 0;
            return;
        }

        this[paramName] += value;
    },
    increaseSatiety(value) {
        this.changeParamValue('satiety', value);
    },
    decreaseSatiety(value) {
        this.changeParamValue('satiety', -value);
    },
    increaseMood(value) {
        this.changeParamValue('mood', value);
    },
    decreaseMood(value) {
        this.changeParamValue('mood', -value);
    },
    increaseHealth(value) {
        this.changeParamValue('health', value);
    },
    decreaseHealth(value) {
        this.changeParamValue('health', -value);
    },
    getMoodString() {
        if (this.mood < 10) {
            return 'awful';
        }
        if (this.mood < 25) {
            return 'bad';
        }
        if (this.mood < 50) {
            return 'normal';
        }
        if (this.mood < 75) {
            return 'good';
        }
        if (this.mood < 90) {
            return 'awesome';
        }

        return 'exceptional';
    },
    play() {
        if (!this.canInteract()) {
            this.logInactiveReason();
            return;
        }

        if (this.mood < 10 || this.satiety < 15 || this.health < 20) {
            console.log('I don\'t want to play now.');
        }

        console.log('Hooray! Let\'s play!');
        this.decreaseHealth(5);
        this.decreaseSatiety(20);
        this.increaseMood(15);
        logSystemMessage(`Satiety level has decreased to ${this.satiety}.`);
        logSystemMessage(`Health level has decreased to ${this.health}.`);
        logSystemMessage(`Mood level has increased to ${this.mood}.`);
    },
    feed(food) {
        if (!this.canInteract()) {
            this.logInactiveReason();
            return;
        }

        if (this.satiety === 100) {
            console.log('I\'m full and don\'t want to eat.');
        }

        if (this.satiety > 95 && food !== this.favouriteFood) {
            console.log(`I'm almost full, but I'd still eat some ${this.favouriteFood}`);
            return;
        }

        if (food === this.favouriteFood) {
            console.log(`Yay! I cannot believe my eyes! I LOVE ${this.favouriteFood.toUpperCase()}!`);
        }

        console.log('Om-nom-nom-nom-nom!');
        if (food === this.favouriteFood) {
            this.increaseMood(15);
            logSystemMessage(`Mood level increased to ${this.mood}`);
        }
        this.increaseSatiety(70);
        logSystemMessage(`Satiety level has increased to ${this.satiety}.`);
    },
    wakeUp() {
        if (!this.isAlive) {
            this.logInactiveReason();
            return;
        }

        if (getMinutesDiff(this.lastFellAsleep, Date.now()) < 10) {
            this.decreaseMood(50);
            console.log('Rawr! I\'ve just fallen asleep! What do you need?');
            logSystemMessage(`Mood level has decreased to ${this.mood}.`);
        } else {
            console.log('Phew, I hope you\'ve woken me up for something important.');
        }

        clearTimeout(this.sleepTimerId);
        this.isSleeping = false;
    },
    putToSleep(minutes) {
        if (!this.canInteract()) {
            this.logInactiveReason();
            return;
        }

        clearTimeout(this.sleepTimerId);

        console.log('I\'m going to sleep now!');
        this.increaseMood(10);
        logSystemMessage(`Mood level has increased to ${this.mood}`);
        this.isSleeping = true;

        this.sleepTimerId = setTimeout(() => {
            this.isSleeping = false;
            console.log('I\'m not sleeping anymore.');
            if (getMinutesDiff(Date.now() - this.lastFellAsleep) > 30) {
                this.increaseMood(50);
                console.log('Wow, I slept so good!');
                logSystemMessage(`Mood level increased to ${this.mood}.`);
            }
        }, transformMinsToMs(minutes));
    },
};

Object.freeze(baseTamagochi);

/*
    using Object.assign() to copy frozen object's data into new one.
    Object.create(baseTamagochi) creates object, that I didn't manage to alter
*/
// eslint-disable-next-line prefer-object-spread
const myTamagochi = Object.assign({}, baseTamagochi);
myTamagochi.name = 'Qooqie';
myTamagochi.favouriteFood = 'oyster';

myTamagochi.feed('lasagna');
myTamagochi.play();

myTamagochi.putToSleep(10);

myTamagochi.feed('oyster');
myTamagochi.wakeUp();
myTamagochi.feed('oyster');
