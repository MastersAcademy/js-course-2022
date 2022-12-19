/*
Homework 4 - Objects
*/

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

const defaultTamagotchi = {
    name: '',
    animal: '',
    likeFood: '',
    happiness: '',
    health: '',
    satiety: '',
};

const userTamagotchi = Object.create(defaultTamagotchi);

userTamagotchi.description = function descriptionTamagotchi() {
    console.log(`\nI'm your "${userTamagotchi.animal}", my name is "${userTamagotchi.name}" and I really like to eat "${userTamagotchi.likeFood}".`);
};

userTamagotchi.characteristic = function characteristicTamagotchi() {
    console.log(`\n    * Main characteristics of the "${userTamagotchi.animal} ${userTamagotchi.name}" *\n    [ Satiety: ${userTamagotchi.satiety} ]   [ Happiness: ${userTamagotchi.happiness} ]   [ Health: ${userTamagotchi.health} ]`);
};

const askName = () => new Promise((resolve) => {
    rl.question(`   What is the "${userTamagotchi.animal}" name? > `, (answer) => {
        userTamagotchi.name = answer;
        resolve();
    });
});

const askAnimal = () => new Promise((resolve) => {
    rl.question('   What animal do you like? > ', (answer) => {
        userTamagotchi.animal = answer;
        resolve();
    });
});

const askFood = () => new Promise((resolve) => {
    rl.question(`   What food does the "${userTamagotchi.animal} ${userTamagotchi.name}" like? > `, (answer) => {
        userTamagotchi.likeFood = answer;
        resolve();
    });
});

const performAction = () => new Promise((resolve) => {
    console.log(`\n${userTamagotchi.animal} ${userTamagotchi.name} likes to "play", "eat" and needs "sleep"...`);
    rl.question(`\n    Choice action for "${userTamagotchi.name}" > `, (answer) => {
        console.clear();
        switch (answer) {
            case 'play':
                userTamagotchi.happiness += 1;
                userTamagotchi.satiety -= 1;
                userTamagotchi.health -= 1;
                console.log(`\n****** The "${userTamagotchi.animal} ${userTamagotchi.name}" played with you ******`);
                break;
            case 'eat':
                userTamagotchi.satiety += 1;
                userTamagotchi.happiness -= 1;
                console.log(`\n****** The "${userTamagotchi.animal} ${userTamagotchi.name}" ate well ******`);
                break;
            case 'sleep':
                userTamagotchi.health += 1;
                userTamagotchi.satiety -= 1;
                console.log(`\n****** The "${userTamagotchi.animal} ${userTamagotchi.name}" slept all day ******`);
                break;
            default:
                console.log(`\n****** "${userTamagotchi.animal} ${userTamagotchi.name}" doesn't understand you... ******`);
                break;
        }
        resolve();
    });
});

const actionChoice = async () => {
    if ((userTamagotchi.satiety > 0) && (userTamagotchi.health > 0)) {
        await performAction();
        userTamagotchi.description();
        userTamagotchi.characteristic();
        await actionChoice();
    } else {
        console.clear();
        console.log('\n***************   OH NO!!!!  *****************');
        console.log(`\nYou didn't take good care of your Tamagotchi "${userTamagotchi.name}" :(`);
        userTamagotchi.characteristic();
        console.log(`\nThe "${userTamagotchi.animal} ${userTamagotchi.name}" was taken to the veterinary clinic....`);
        console.log('\n***************   Game over   ****************\n');
        rl.close();
    }
};

const startGame = async () => {
    console.clear();
    console.log('\n**** To start the game you need to create a Tamagotchi... *****\n');
    await askAnimal();
    await askName();
    await askFood();
    userTamagotchi.happiness = 5;
    userTamagotchi.health = 5;
    userTamagotchi.satiety = 5;
    console.clear();
    console.log('\n*************** Start new game ****************');
    userTamagotchi.description();
    userTamagotchi.characteristic();
    await actionChoice();
};

startGame();
