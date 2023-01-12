const tamagochi = {
    name: 'Kiki',
    healthValue: 5,
    happinessValue: 5,
    satietyValue: 3,
    getLevelOfIndications() {
        console.log(`The level of indications:
            - healthValue: ${this.healthValue},\n
            - happinessValue: ${this.happinessValue},\n
            - satietyValue: ${this.satietyValue}\n`);
    },
    stateAnalyzer() {
        const isAlive = this.healthValue >= 1
            && this.happinessValue >= 1
            && this.satietyValue >= 1;
        if (isAlive) {
            console.log(`Keep on. ${this.name} is still alive.`);
        } else {
            console.log(`Unfortunately, ${this.name} died. Game over.`);
        }
        return isAlive;
    },
    actions: {
        healthUp() {
            tamagochi.healthValue += 3;
            tamagochi.happinessValue--;
            tamagochi.satietyValue--;
            console.log('Function name - healthUp()');
            tamagochi.getLevelOfIndications();
        },
        happyUp() {
            tamagochi.happinessValue++;
            console.log('Function name - happyUp()');
            tamagochi.getLevelOfIndications();
        },
        play() {
            tamagochi.satietyValue--;
            tamagochi.happinessValue--;
            tamagochi.healthValue -= 3;
            console.log('Function name - play()');
            tamagochi.getLevelOfIndications();
        },
        feedUp() {
            tamagochi.satietyValue++;
            console.log('Function name - feedUp()');
            tamagochi.getLevelOfIndications();
        },
        clean() {
            tamagochi.healthValue++;
            console.log('Function name - clean()');
            tamagochi.getLevelOfIndications();
        },
        shopping() {
            tamagochi.happinessValue++;
            console.log('Function name - shopping()');
            tamagochi.getLevelOfIndications();
        },
    },
};
const SEPARATOR = '*********************************';
let tamagochiTimeOfLive = 0;
let aliveStatus;

function getRandonInt(value) {
    return Math.floor(Math.random() * Math.floor(value));
}
const methods = Object.keys(tamagochi.actions);
const methodsCount = methods.length;
const call = (index) => tamagochi.actions[methods[index]]();

const randomizeFunction = setInterval(() => {
    console.log(SEPARATOR);
    call(getRandonInt(methodsCount));
    aliveStatus = tamagochi.stateAnalyzer();
    if (!aliveStatus) {
        clearInterval(randomizeFunction);
    }
    tamagochiTimeOfLive += 0.5;
    console.log(`Time during tamagochi ${tamagochi.name} was alive: ${tamagochiTimeOfLive} seconds`);
    console.log(SEPARATOR);
}, 500);
