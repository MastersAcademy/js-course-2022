const tamagochi = {
    name: 'Lion',
    tamagochiHealse: 10,
    tamagochiHappiness: 10,
    tamagochiSatiety: 10,
    tamagochiEnergy: 10,

    play() {
        this.tamagochiHealse -= 1;
        this.tamagochiHappiness += 2;
        this.tamagochiSatiety -= 2;
        this.tamagochiEnergy -= 2;
    },
    eat() {
        this.tamagochiHealse += 1;
        this.tamagochiHappiness += 1;
        this.tamagochiSatiety += 2;
        this.tamagochiEnergy += 1;
    },
    sleep() {
        this.tamagochiHealse += 1;
        this.tamagochiHappiness -= 2;
        this.tamagochiSatiety -= 2;
        this.tamagochiEnergy += 2;
    },
    traning() {
        this.tamagochiHealse += 2;
        this.tamagochiHappiness -= 1;
        this.tamagochiSatiety -= 2;
        this.tamagochiEnergy += 1;
    },
    tamagochiLifeStatus() {
        if (this.tamagochiHealse <= 0 || this.tamagochiHappiness <= 0
            || this.tamagochiSatiety <= 0 || this.tamagochiEnergy <= 0) {
            console.log(`you ${this.name} is died!!`);
        } else {
            console.log(`Hi, my name is ${this.name}`);
        }
    },
};

tamagochi.play();
tamagochi.eat();
tamagochi.sleep();
tamagochi.traning();
tamagochi.tamagochiLifeStatus();
