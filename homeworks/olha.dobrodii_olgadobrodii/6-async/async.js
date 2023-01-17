const tamagochi = new Tamagochi();
function Tamagochi() {
    this.intervalId = setInterval(this.timer, 500);
        this.timer = function() {
        const arr_tamagochi = [this.growUp, this.reduction, this.playWithMe, this.feedMe];
        Math.floor(Math.random() * 10) 
        if(this.health < 1
            || this.happiness < 1
            || this.happiness < 1
            || this.bellyfull < 1) {
                arr_tamagochi = true;
                this.showMassage();
            } else {
                tamagochi_random = false;
                this.showMassage();
            }
    }
    this.growUp = function() {
        this.health += 1;
        this.happiness += 1;
        this.bellyfull += 1;

        this.showMassage();
    },
    this.reduction = function() {
        this.health -= 1;
        this.happiness -= 1;
        this.bellyfull -= 1;
        this.showMassage();
    },
    this.playWithMe = function () {
        this.health += 2;
        this.happiness += 1;
        this.bellyfull += 3;
        this.showMassage();
    },

    this.feedMe = function () {
        this.health += 2;
        this.happiness += 1;
        this.bellyfull += 3;
        this.showMassage();
    }
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
}
};