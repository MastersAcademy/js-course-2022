const tamagochi = {
    health: 50,
    happy: 50,
    satiety: 50,

    play() {
        tamagochi.health -= 1;
        tamagochi.happy += 1;
        tamagochi.satiety -= 1;
        console.log(`Tamagochi health: ${tamagochi.health}`);
        console.log(`Tamagochi happy: ${tamagochi.happy}`);
        console.log(`Tamagochi satiety: ${tamagochi.satiety}`);
    },

    feed() {
        tamagochi.health += 1;
        tamagochi.happy -= 1;
        tamagochi.satiety += 1;
        console.log(`Tamagochi health: ${tamagochi.health}`);
        console.log(`Tamagochi happy: ${tamagochi.happy}`);
        console.log(`Tamagochi satiety: ${tamagochi.satiety}`);
    },
    checkIsAlive() {
        if (tamagochi.health === 0 || tamagochi.satiety === 0 || tamagochi.happy === 0) {
            console.log('Tamagochi death: GAME OVER');
        }
    },
};

tamagochi.play();
tamagochi.feed();
tamagochi.feed();
tamagochi.checkIsAlive();
