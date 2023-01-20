const tamagochi = {
    health: 5, // здоров'я
    energy: 5, // єнергія
    mood: 5, // настрій
    eat() { // поїсти
        this.health -= 2;
        this.energy += 1;
        this.mood += 1;
        if (this.energy > 8) {
            console.log('ааа... ЖИВІТ БОЛИТЬ ааа...');
        } else {
            console.log(`ням-ням смакота
            eat
            єнергія = ${this.energy} здоров'я = ${this.health} настрій = ${this.mood}`);
        }
    },
    play() { // погратися
        this.energy -= 2;
        this.health += 1;
        this.mood += 1;
        if (this.energy < 1) {
            console.log('я втомлений мені погано');
        } else {
            console.log(`ВАУ весело!!! Давай ще...
            play
            єнергія = ${this.energy} здоров'я = ${this.health} настрій = ${this.mood}`);
        }
    },
    sleep() { // спати
        this.mood -= 2;
        this.health += 1;
        this.energy += 1;
        if (this.mood < 1) {
            console.log('помер з нудьги');
        } else {
            console.log(`надобраніч
            sleep 
            єнергія = ${this.energy} здоров'я = ${this.health} настрій = ${this.mood}`);
        }
    },
};

const cat = Object.create(tamagochi, {
    name: { value: 'Murka' },
    legs: { value: 4 },
    toPet: { value: () => console.log('Moorrr moorrrrr') },
});

const allMethods = ['eat', 'play', 'sleep'];
let lifetime = 0;

cat.launchingRandomMethod = function () {
    if (cat.energy > 8 || cat.energy < 1 || cat.mood < 1 || cat.health < 1) {
        return console.log(`Game over 
        lifetime = ${lifetime} seconds`);
    }
    cat[allMethods[parseInt(Math.random() * 3, 10)]]();
    lifetime += 0.5;
    return setTimeout(cat.launchingRandomMethod, 500);
};

setTimeout(cat.launchingRandomMethod, 500);
