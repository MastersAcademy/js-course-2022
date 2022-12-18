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
        const indicators = `
    Status ${this.name}:
        health = ${this.health}
        happiness = ${this.happiness}
        satiety = ${this.satiety}
        cleanliness = ${this.cleanliness}`;
        let message = '';

        if (this.health <= 3) {
            message = `Your ${tamagotchi.name} has few lives!`;
        } else if (this.happiness <= 3) {
            message = `${tamagotchi.name} lacks happiness!`;
        } else if (this.satiety <= 3) {
            message = `Your ${tamagotchi.name} wants to eat!`;
        } else if (this.cleanliness <= 3) {
            message = `It is very dirty near ${tamagotchi.name}!`;
        }

        console.log(message, indicators);
    },
    feedTamagotchi() {
        this.health++;
        this.happiness++;
        this.satiety += 3;
        this.cleanliness -= 2;
        this.lifeCheckTamagotchi();
    },
    playTamagotchi() {
        this.happiness += 2;
        this.health--;
        this.satiety--;
        this.cleanliness--;
        this.lifeCheckTamagotchi();
    },
    clearTamagotchi() {
        this.happiness++;
        this.satiety--;
        this.cleanliness += 3;
        this.lifeCheckTamagotchi();
    },
    berateTamagotchi() {
        this.health -= 1;
        this.happiness -= 3;
        this.satiety--;
        this.lifeCheckTamagotchi();
    },
    putToSleepTamagotchi() {
        this.health += 3;
        this.happiness += 3;
        this.satiety = 2;
        this.cleanliness = 5;
        this.lifeCheckTamagotchi();
    },
};

tamagotchi.feedTamagotchi();
tamagotchi.playTamagotchi();
tamagotchi.clearTamagotchi();
tamagotchi.berateTamagotchi();
tamagotchi.putToSleepTamagotchi();
tamagotchi.feedTamagotchi();
tamagotchi.statusTamagotchi();
