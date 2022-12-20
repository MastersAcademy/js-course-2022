const tamagochi = {
    health: 50,
    happy: 50,
    satiety: 50,
    superPower: 20,

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
    addScores(someFood) {
        if (someFood === this.favoriteFood) {
            this.superPower += 5;
            return console.log(`Ooo.. yee!\u{1F60D} My superpower is growing: ${this.superPower} `);
        }
        return console.log('What is this? I dont like it. Please give me the Cookies');
    },
};

tamagochi.play();
tamagochi.feed();

const me = Object.create(tamagochi);
me.favoriteFood = 'Cookies';
me.addScores('Cookies');
me.addScores('Pepsi');
me.addScores('Cookies');
