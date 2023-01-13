const tamagotchi = {
    name: 'Kurama',
    health: 10,
    happiness: 10,
    satiety: 10,
    cleanliness: 10,
    lifeCheckTamagotchi() {
        if (tamagotchi.health <= 0
            || tamagotchi.happiness <= 0
            || tamagotchi.satiety <= 0
            || tamagotchi.cleanliness <= 0) {
            console.log(`Your ${tamagotchi.name} is dead... 😭😭😭`);
        }
    },
    statusTamagotchi() {
        const indicators = `Status ${this.name}:
        health = ${this.health}
        happiness = ${this.happiness}
        satiety = ${this.satiety}
        cleanliness = ${this.cleanliness}`;

        console.log(indicators);
    },
    feedTamagotchi() {
        this.health++;
        this.happiness++;
        this.satiety += 3;
        this.cleanliness -= 2;
        console.log('\nUsed the method \'feedTamagotchi\'');
        this.statusTamagotchi();
    },
    playTamagotchi() {
        this.happiness += 2;
        this.health--;
        this.satiety--;
        this.cleanliness--;
        console.log('\nUsed the method \'playTamagotchi\'');
        this.statusTamagotchi();
    },
    clearTamagotchi() {
        this.happiness++;
        this.satiety--;
        this.cleanliness += 3;
        console.log('\nUsed the method \'clearTamagotchi\'');
        this.statusTamagotchi();
    },
    berateTamagotchi() {
        this.health -= 1;
        this.happiness -= 3;
        this.satiety--;
        console.log('\nUsed the method \'berateTamagotchi\'');
        this.statusTamagotchi();
    },
    putToSleepTamagotchi() {
        this.health += 3;
        this.happiness += 3;
        this.satiety = 2;
        this.cleanliness = 5;
        console.log('\nUsed the method \'putToSleepTamagotchi\'');
        this.statusTamagotchi();
    },
    randomMethod() {
        const callRandomMethod = Math.floor(Math.random() * 5);
        switch (callRandomMethod) {
            case 0:
                this.feedTamagotchi();
                break;
            case 1:
                this.playTamagotchi();
                break;
            case 2:
                this.clearTamagotchi();
                break;
            case 3:
                this.berateTamagotchi();
                break;
            default:
                this.putToSleepTamagotchi();
                break;
        }
    },
};
const gameStart = new Promise((resolve) => {
    let lifetime = 0;
    const game = setInterval(() => {
        tamagotchi.randomMethod();
        lifetime += 0.5;
        if (tamagotchi.health < 1
            || tamagotchi.happiness < 1
            || tamagotchi.satiety < 1
            || tamagotchi.cleanliness < 1) {
            clearInterval(game);
            resolve(lifetime);
        }
    }, 500);
});

gameStart.then((lifetime) => {
    console.log(`Game over! How long did ${tamagotchi.name} life: ${lifetime} seconds.`);
});
