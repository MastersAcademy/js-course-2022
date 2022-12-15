const tamagotchi = {
    health: 0,
    happiness: 5,
    satiety: 5,
    changeValue(value, sembol) {
        if (this[value] <= 0) console.log('your tamagotchi is died');
        if (sembol === '-') this[value]--;
        if (sembol === '+') this[value]++;
    },
};

tamagotchi.changeValue('health', '+');

// second task

const defaultTamagotchi = {
    health: 0,
    happiness: 5,
    satiety: 5,
};

const barsik = Object.create(defaultTamagotchi);

barsik.name = 'Barsik';
barsik.preferFood = 'fish';
