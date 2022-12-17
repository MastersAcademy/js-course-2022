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

const questionName = () => new Promise((resolve) => {
    rl.question('Enter name tamagochi: ', (answer) => {
        userTamagotchi.name = answer;
        resolve();
    });
});

const questionColor = () => new Promise((resolve) => {
    rl.question('Enter color tamagochi: ', (answer) => {
        userTamagotchi.color = answer;
        resolve();
    });
});

const questionFood = () => new Promise((resolve) => {
    rl.question('Enter what food the tamagotchi likes: ', (answer) => {
        userTamagotchi.likeFood = answer;
        resolve();
    });
});

const createTamagochi = async () => {
    console.log('Start game');
    await questionName();
    await questionColor();
    await questionFood();
    rl.close();
    userTamagotchi.happiness = 5;
    userTamagotchi.health = 5;
    userTamagotchi.satiety = 5;
    console.log(`Congratulations, you have created your tamagotchi ${userTamagotchi.name}!!!\n`, userTamagotchi);
};

createTamagochi();
