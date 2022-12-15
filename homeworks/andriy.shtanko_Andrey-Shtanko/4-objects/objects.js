const tamagochi = {
    health: 5,
    happiness: 5,
    bellyfull: 5,
    play() {
        this.health -= 1;
        this.bellyfull -= 1;
        this.happiness += 1;
        if (this.health <= 0 || this.bellyfull <= 0) {
            return console.log('Sorry, your tamagochi is DEAD!(((');
        }
        return console.log('I like play, lets go more!)))');
    },
    eat() {
        this.health += 1;
        this.bellyfull += 1;
        this.happiness -= 1;
        if (this.happiness <= 0) {
            return console.log('Sorry, your tamagochi was so sad and DIE!(((');
        }
        return console.log('I like it, give me more!)))');
    },
    training() {
        this.health += 1;
        this.bellyfull -= 1;
        this.happiness -= 1;
        if (this.happiness <= 0 || this.bellyfull <= 0) {
            return console.log('Sorry, your tamagochi was so tired  and DIE!(((');
        }
        return console.log('I like training, lets training more!)))');
    },
};
tamagochi.play();
tamagochi.eat();
tamagochi.training();
tamagochi.training();
tamagochi.training();
tamagochi.training();
tamagochi.training();
