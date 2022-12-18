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
        return this.checkIsAlive();
    },
    feed() {
        tamagochi.health += 1;
        tamagochi.happy -= 1;
        tamagochi.satiety += 1;
        console.log(`Tamagochi health: ${tamagochi.health}`);
        console.log(`Tamagochi happy: ${tamagochi.happy}`);
        console.log(`Tamagochi satiety: ${tamagochi.satiety}`);
        return this.checkIsAlive();
    },
    checkIsAlive() {
        if (tamagochi.health <= 0 || tamagochi.satiety <= 0 || tamagochi.happy <= 0) {
            return console.log('GAME OVER:Tamagochi died');
        }
        return console.log('Tamagochi is alive');
    },
};

tamagochi.play();
tamagochi.feed();
