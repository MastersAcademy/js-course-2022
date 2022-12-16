const tamagochi = {
    health: 5, // здоров'я
    energy: 5, // єнергія
    mood: 5, // настрій
    eat() { // поїсти
        this.health -= 1;
        this.energy += 1;
        this.mood += 1;
        if (this.energy > 8) {
            console.log('ааа... ЖИВІТ БОЛИТЬ ааа...');
        } else {
            console.log('ням-ням смакота');
        }
    },
    play() { // погратися
        this.energy -= 2;
        this.health -= 1;
        this.mood += 1;
        if (this.energy < 1) {
            console.log('я втомлений мені погано');
        } else {
            console.log('ВАУ весело!!! Давай ще...');
        }
    },
    sleep() { // спати
        this.health += 1;
        this.energy += 1;
        this.mood -= 2;
        if (this.mood < 1) {
            console.log('помер з нудьги');
        } else {
            console.log('надобраніч');
        }
    },
};

const chicken = Object.create(tamagochi, {
    name: { value: 'Chika' },
    wings: { value: 2 },
    fly: { value: () => console.log('I am flying') },
});

const cat = Object.create(tamagochi, {
    name: { value: 'Murka' },
    legs: { value: 4 },
    toPet: { value: () => console.log('Moorrr moorrrrr') },
});

const dog = Object.create(tamagochi, {
    name: { value: 'Palkan' },
    legs: { value: 4 },
    voice: { value: () => console.log('Woof woof') },
});
chicken.fly();
chicken.play();
chicken.play();
chicken.play();
cat.toPet();
cat.eat();
cat.eat();
cat.eat();
cat.eat();
dog.voice();
dog.sleep();
dog.sleep();
dog.sleep();
