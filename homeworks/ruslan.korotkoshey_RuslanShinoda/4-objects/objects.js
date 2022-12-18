const tamagotchi = {
    name: 'Kurama',
    health: 10,
    happiness: 10,
    satiety: 2,
    cleanliness: 2,
    lifeCheckTamagotchi() {
        if (tamagotchi.health <= 0
            || tamagotchi.happiness <= 0
            || tamagotchi.satiety <= 0
            || tamagotchi.cleanliness <= 0) {
            console.log(`Your ${tamagotchi.name} is dead... 😭😭😭`);
        }
    },
    indicatorsTamagotchi() {
        console.log(`Status ${this.name}:
            health = ${this.health}
            happiness = ${this.happiness}
            satiety = ${this.satiety}
            cleanliness = ${this.cleanliness}`);
    },
    statusTamagotchi() {
        if (this.health <= 3) {
            console.log(`Your ${tamagotchi.name} has few lives!`);
            this.indicatorsTamagotchi();
        } else if (this.happiness <= 3) {
            console.log(`${tamagotchi.name} lacks happiness!`);
            this.indicatorsTamagotchi();
        } else if (this.satiety <= 3) {
            console.log(`Your ${tamagotchi.name} wants to eat!`);
            this.indicatorsTamagotchi();
        } else if (this.cleanliness <= 3) {
            console.log(`It is very dirty near ${tamagotchi.name}!`);
            this.indicatorsTamagotchi();
        } else {
            this.indicatorsTamagotchi();
        }
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

// tamagotchi.feedTamagotchi();
// tamagotchi.playTamagotchi();
// tamagotchi.clearTamagotchi();
// tamagotchi.berateTamagotchi();
// tamagotchi.putToSleepTamagotchi();
// tamagotchi.feedTamagotchi();
tamagotchi.statusTamagotchi();
