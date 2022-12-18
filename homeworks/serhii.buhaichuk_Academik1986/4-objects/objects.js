const tamagochi = {
    health: 50,
    happy: 50,
    satiety: 50,
    showTamagochiIndicators() {
        console.log(`Hi! My name is tamagochi\u{1F60D}:${this.name}! Here is my scores`);
    },
};

const tamagochi1 = Object.create(tamagochi);
tamagochi1.name = 'Yamakasy';
tamagochi1.health = 20;
tamagochi1.happy = 20;
tamagochi1.satiety = 20;
tamagochi1['favorite eat'] = 'cookies';
tamagochi1.showTamagochiIndicators();
console.log(tamagochi1);

const tamagochi2 = Object.create(tamagochi);
tamagochi2.name = 'Kitana';
tamagochi2.health = 37;
tamagochi2.happy = 42;
tamagochi2.satiety = 85;
tamagochi2['favorite drink'] = 'pineapple juice';
tamagochi2.showTamagochiIndicators();
console.log(tamagochi2);

const tamagochi3 = Object.create(tamagochi);
tamagochi3.name = 'Yakudza';
tamagochi3.health = 67;
tamagochi3.happy = 88;
tamagochi3.satiety = 77;
tamagochi3['favorite weapon'] = 'knife';
tamagochi3.showTamagochiIndicators();
console.log(tamagochi3);
