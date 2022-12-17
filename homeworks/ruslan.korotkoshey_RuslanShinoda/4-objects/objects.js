const tamagotchi = {
    name: 'Kurama',
    health: 10,
    happiness: 10,
    satiety: 10,
    cleanliness: 10,
    deadTamagotchi() {
        if (tamagotchi.health <= 0
            || tamagotchi.happiness <= 0
            || tamagotchi.satiety <= 0
            || tamagotchi.cleanliness <= 0) {
            console.log(`Your ${tamagotchi.name} is dead... 😭😭😭`);
        }
    },
    statusTamagotchi() {
        if (tamagotchi.health <= 0
        || tamagotchi.happiness <= 0
        || tamagotchi.satiety <= 0
        || tamagotchi.cleanliness <= 0) {
            console.log(`Your ${tamagotchi.name} is dead... 😭😭😭`);
        } else {
            console.log(`Status ${this.name}:
            health = ${this.health}
            happiness = ${this.happiness}
            satiety = ${this.satiety}
            cleanliness = ${this.cleanliness}`);
        }
    },
    feedTamagotchi() {
        this.health++;
        this.happiness++;
        this.satiety += 3;
        this.cleanliness -= 2;
        this.deadTamagotchi();
    },
    playTamagotchi() {
        this.happiness += 2;
        this.health--;
        this.satiety--;
        this.cleanliness--;
        tamagotchi.deadTamagotchi();
    },
    clearTamagotchi() {
        this.happiness++;
        this.satiety--;
        this.cleanliness += 3;
        tamagotchi.deadTamagotchi();
    },
    berateTamagotchi() {
        this.health -= 1;
        this.happiness -= 3;
        this.satiety--;
        tamagotchi.deadTamagotchi();
    },
    putToSleepTamagotchi() {
        this.health += 3;
        this.happiness += 3;
        this.satiety = 2;
        this.cleanliness = 5;
        tamagotchi.deadTamagotchi();
    },
};

tamagotchi.feedTamagotchi();
tamagotchi.playTamagotchi();
tamagotchi.clearTamagotchi();
tamagotchi.berateTamagotchi();
tamagotchi.putToSleepTamagotchi();
tamagotchi.feedTamagotchi();
tamagotchi.statusTamagotchi();
