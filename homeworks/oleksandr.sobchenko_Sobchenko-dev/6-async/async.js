function randominazerNumber(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

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
            return false;
        }
        // console.log(`Hi, my name is ${this.name}`);
        console.log(this.tamagochiHealse, ' - tamagochiHealse');
        console.log(this.tamagochiHappiness, ' - tamagochiHappiness');
        console.log(this.tamagochiSatiety, ' - tamagochiSatiety');
        console.log(this.tamagochiEnergy, ' - tamagochiEnergy');
        return true;
    },
    useTamagochi() {
        const arrAction = ['play', 'eat', 'sleep', 'traning'];

        const startTime = new Date();

        const timer = setInterval(() => {
            const randomAction = arrAction[randominazerNumber(arrAction.length)];

            if (!tamagochi.tamagochiLifeStatus()) {
                const endTime = new Date();
                console.log(`${this.name} lived ${(endTime - startTime) / 1000} seconds`);
                return clearInterval(timer);
            }

            return tamagochi[randomAction]();
        }, 500);
    },
};

tamagochi.useTamagochi();
