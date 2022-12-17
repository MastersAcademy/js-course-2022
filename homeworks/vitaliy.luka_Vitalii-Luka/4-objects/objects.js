/*
Homework 4 - Objects
*/

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

const defaultTamagotchi = {
    name: '',
    color: '',
    likeFood: '',
    happiness: '',
    health: '',
    satiety: '',
};

const userTamagotchi = Object.create(defaultTamagotchi);

// Description of tamagotchi
userTamagotchi.description = function descriptionTamagotchi() {
    console.log(`\nI'm your "${userTamagotchi.color}" tamagotchi, my name is "${userTamagotchi.name}" and I really like to eat "${userTamagotchi.likeFood}".`);
};

// Main characteristics of tamagotchi
userTamagotchi.characteristic = function characteristicTamagotchi() {
    console.log(`\nTamagotchi "${userTamagotchi.name}":\n   Satiety: ${userTamagotchi.satiety}\n   Happiness: ${userTamagotchi.happiness}\n   Health: ${userTamagotchi.health}`);
};

const questionName = () => new Promise((resolve) => {
    rl.question('   Enter name tamagochi: ', (answer) => {
        userTamagotchi.name = answer;
        resolve();
    });
});

const questionColor = () => new Promise((resolve) => {
    rl.question('   Enter color tamagochi: ', (answer) => {
        userTamagotchi.color = answer;
        resolve();
    });
});

const questionFood = () => new Promise((resolve) => {
    rl.question('   Enter what food the tamagotchi likes: ', (answer) => {
        userTamagotchi.likeFood = answer;
        resolve();
    });
});

const questionAction = () => new Promise((resolve) => {
    console.log(`Tamagotchi "${userTamagotchi.name}" can do: "play", "eat", "sleep"....`);
    rl.question(`   Choice action for "${userTamagotchi.name}": `, (answer) => {
        switch (answer) {
            case 'play':
                userTamagotchi.happiness += 1;
                userTamagotchi.satiety -= 1;
                userTamagotchi.health -= 1;
                break;
            case 'eat':
                userTamagotchi.satiety += 1;
                userTamagotchi.happiness -= 1;
                break;
            case 'sleep':
                userTamagotchi.health += 1;
                userTamagotchi.satiety -= 1;
                break;
            default:
                console.log(`\nTamagotchi "${userTamagotchi.name}" doesn't understand you ...`);
                break;
        }
        resolve();
    });
});

const actionChoice = async () => {
    console.log('');
    await questionAction();
    console.log('\n***************************************');
    userTamagotchi.description();
    userTamagotchi.characteristic();
    await actionChoice();
};

const startGame = async () => {
    // console.log('=================================');
    // console.log('=        Start game             =');
    // console.log('=================================');
    console.log('\nTo start the game you need to create a Tamagotchi...\n');

    await questionName();
    await questionColor();
    await questionFood();
    userTamagotchi.happiness = 5;
    userTamagotchi.health = 5;
    userTamagotchi.satiety = 5;
    console.log('\n=======================================');
    console.log('=            Start new game           =');
    console.log('=======================================');
    console.log('\n***************************************');
    userTamagotchi.description();
    userTamagotchi.characteristic();
    await actionChoice();
};

startGame();
