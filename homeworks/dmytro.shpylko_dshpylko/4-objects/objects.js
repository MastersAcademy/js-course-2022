const tamagotchi = {
    health: 100,
    happy: 100,
    hungry: 100,
};

let tamagotchiPlay = null;
let tamagotchiFeed = null;
let tamagotchiHappy = null;

function playWithPet(parametr1) {
    // eslint-disable-next-line max-len
    tamagotchiPlay = { ...parametr1 };
    tamagotchiPlay.health -= 10;
    tamagotchiPlay.happy += 10;
    tamagotchiPlay.hungry -= 10;
    return console.log(Object.entries(tamagotchiPlay));
}

function feedYourPet(parametr2) {
    // eslint-disable-next-line max-len
    tamagotchiFeed = { ...parametr2 };
    tamagotchiFeed.health += 5;
    tamagotchiFeed.happy += 10;
    tamagotchiFeed.hungry += 10;
    return console.log(Object.entries(tamagotchiFeed));
}

function makePetHappy(parametr3) {
    // eslint-disable-next-line max-len
    tamagotchiHappy = { ...parametr3 };
    tamagotchiHappy.health += 5;
    tamagotchiHappy.happy += 15;
    tamagotchiHappy.hungry -= 10;
    return console.log(Object.entries(tamagotchiHappy));
}

// eslint-disable-next-line no-unused-vars
function conditionOfTamagotchi(healthCondition, happyCondition, satietyCondition) {
    if (Object.values(tamagotchiPlay)[2] <= 0) {
        return console.log('Sorry, but your pet is a died.');
    }
    // eslint-disable-next-line no-tabs
    if (Object.values(tamagotchiPlay)[2] < 30) 		{
        return console.log('You should spent more attention for your pet');
    }
    if (Object.values(tamagotchiPlay)[2] < 60) {
        return console.log('Play more with your pet');
    }
    if (Object.values(tamagotchiPlay)[2] >= 60) {
        return console.log('Your pet has a nice condition');
    }

    return console.log('I\'m fell youself realy good');
}

playWithPet(tamagotchi);
playWithPet(tamagotchiPlay);
playWithPet(tamagotchiPlay);
playWithPet(tamagotchiPlay);
conditionOfTamagotchi(Object.values(tamagotchiPlay));
playWithPet(tamagotchiPlay);
feedYourPet(tamagotchiPlay);
makePetHappy(tamagotchiPlay);
playWithPet(tamagotchiPlay);
playWithPet(tamagotchiPlay);
conditionOfTamagotchi(Object.values(tamagotchiPlay));
playWithPet(tamagotchiPlay);
playWithPet(tamagotchiPlay);
playWithPet(tamagotchiPlay);
conditionOfTamagotchi(Object.values(tamagotchiPlay));
