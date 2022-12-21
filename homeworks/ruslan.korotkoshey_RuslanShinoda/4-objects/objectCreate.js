const prototypTamagotchi = {
    name: 'Tamagotchi',
    type: 'animal',
    health: 0,
    happiness: 0,
    satiety: 0,
    cleanliness: 0,
    activity: 0,
};

const tailedBeast = Object.create(prototypTamagotchi);
tailedBeast.name = 'Kurama';
tailedBeast.type = 'nine-tailed';
tailedBeast.health = 1000;
tailedBeast.happiness = 50;
tailedBeast.satiety = 100;
tailedBeast.activity = 1000;
tailedBeast.superPower = 'infinite chakra';

const ogre = Object.create(prototypTamagotchi);
ogre.name = 'Rock';
ogre.type = 'usual';
ogre.health = 100;
ogre.happiness = 10;
ogre.satiety = 5;
ogre.cleanliness = -20;
ogre.activity = 30;
ogre.loveFood = 'human';
ogre.weapon = 'walking stick';
