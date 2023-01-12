const tamagochi = {
    name: 'Kiki',
    healthValue: 5,
    happinessValue: 5,
    satietyValue: 3,
    getLevelOfIndications(funcName) {
        const propTable = {};
        propTable.health = this.healthValue;
        propTable.happiness = this.happinessValue;
        propTable.satiety = this.satietyValue;
        propTable.function = funcName;
        console.table(propTable);
    },
    stateAnalyzer() {
        const isAlive = this.healthValue >= 1
            && this.happinessValue >= 1
            && this.satietyValue >= 1;
        if (isAlive) {
            console.log(`\x1b[90m Keep on. ${this.name} is still\x1b[0m \x1b[32m alive.\x1b[0m`);
        } else {
            console.log(`Unfortunately, ${this.name} died.\x1b[31m Game over.\x1b[0m`);
        }
        return isAlive;
    },
    actions: {
        healthUp() {
            tamagochi.healthValue += 3;
            tamagochi.happinessValue--;
            tamagochi.satietyValue--;
        },
        happyUp() {
            tamagochi.happinessValue++;
        },
        play() {
            tamagochi.satietyValue--;
            tamagochi.happinessValue--;
            tamagochi.healthValue -= 3;
        },
        feedUp() {
            tamagochi.satietyValue++;
        },
        clean() {
            tamagochi.healthValue++;
        },
        shopping() {
            tamagochi.happinessValue++;
        },
    },
};
const SEPARATOR = '\x1b[1;34m ********************************* \x1b[0m';
let aliveStatus;

const getRandomInt = (value) => Math.floor(Math.random() * value);
const methods = Object.keys(tamagochi.actions);
const methodsCount = methods.length;
const call = (index) => {
    tamagochi.actions[methods[index]]();
    return index;
};

console.time('game was during time');
const randomizeFunction = setInterval(() => {
    console.log(SEPARATOR);
    const methodNumber = call(getRandomInt(methodsCount));
    tamagochi.getLevelOfIndications(methods[methodNumber]);
    aliveStatus = tamagochi.stateAnalyzer();

    if (!aliveStatus) {
        clearInterval(randomizeFunction);
        console.timeEnd('game was during time');
    }
}, 500);
