const tamagochi = {
    health: 50,
    happy: 50,
    satiety: 50,
};

function feed() {
    tamagochi.health += 1;
    tamagochi.happy -= 1;
    tamagochi.satiety += 1;

    console.log(`Pet health: ${tamagochi.health}`);
    console.log(`Pet happy: ${tamagochi.happy}`);
    console.log(`Per satiety: ${tamagochi.satiety}`);

    if (tamagochi.health === 0 || tamagochi.happy === 0) {
        console.log('Your pet is dead');
    } 
}

function play() {
    tamagochi.health -= 1;
    tamagochi.happy += 1;
    tamagochi.satiety -= 1;

    console.log(`Pet health: ${tamagochi.health}`);
    console.log(`Pet happy: ${tamagochi.happy}`);
    console.log(`Per satiety: ${tamagochi.satiety}`);

    if (tamagochi.health === 0 || tamagochi.satiety === 0) {
        console.log('Your pet is dead');
    }
}

feed();
play();
play();
