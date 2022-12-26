const tamagochi = {
    maxHealth: 10,
    maxHappiness: 10,
    maxBellyful: 10,
    growUp() {
        this.health += 1;
        this.happiness += 1;
        this.bellyfull += 1;
    },
    reduction() {
        this.health -= 1;
        this.happiness -= 1;
        this.bellyfull -= 1;
    },
    playWithMe() {
        this.health -= 2;
        this.happiness += 1;
        this.bellyfull -= 3;
    },
    feedMe() {
        this.health += 2;
        this.happiness += 1;
        this.bellyfull += 3;
    },
};
tamagochi.checkLife = function () {
    if ((this.health) <= 0
    || (this.happiness) <= 0
    || (this.bellyful) <= 0) {
        return false;
    }
        return true;
};
tamagochi.showMassage = function () {
    if (this.checkLife() === false) {
        return 'happy pet';
    }
        return 'sorry, you pet died';
};
