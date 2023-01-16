const tamagochi = {
    name: 'Тамагочi',
    healthLevel: 10,
    happinessLevel: 10,
    sleepLevel: 10,
    foodLevel: 10,

    infoAboutPets() {
        console.log(`Показники ${this.name}: \nздоров\`я - ${this.healthLevel} \nщастя - ${this.happinessLevel} \nсон - ${this.sleepLevel} \nситiсть - ${this.foodLevel}`);
    },

    hungry() {
        if (this.foodLevel <= 3 && this.foodLevel >= 1) {
            console.log(`${this.name} дуже голодний...`);
        }
        if (this.foodLevel <= 0) {
            console.log(`Ви не годували ${this.name} довгий час. Вiн не змiг довго без пакушать... Кiнець гри...`);
        }
    },

    happy() {
        if (this.happinessLevel <= 3 && this.happinessLevel >= 1) {
            console.log(`${this.name} сумний, дуже сумний...`);
        }
        if (this.happinessLevel <= 0) {
            console.log(`${this.name} дуже довго не грався. Кiнець гри...`);
        }
    },

    tired() {
        if (this.sleppLevel <= 3 && this.sleppLevel >= 1) {
            console.log(`${this.name} оч хоче спатки`);
        }
        if (this.sleppLevel <= 0) {
            console.log(`${this.name} не спав довгий час. ${this.name} вмер вiд перевтоми. Кiнець гри...`);
        }
    },

    eat() {
        this.healthLevel -= 1;
        this.happinessLevel -= 1;
        this.sleppLevel -= 1;
        this.foodLevel += 3;
        console.log(`[Ви покормили ${this.name}]`);
        this.infoAboutPets();
        this.hungry();
        this.happy();
        this.tired();
    },

    goingShop() {
        this.healthLevel -= 1;
        this.happinessLevel += 3;
        this.sleppLevel -= 1;
        this.foodLevel -= 1;
        console.log(`[${this.name} сходив за пакупачкамi :)]`);
        this.infoAboutPets();
        this.hungry();
        this.happy();
        this.tired();
    },

    sleep() {
        this.healthLevel += 2;
        this.happinessLevel -= 1;
        this.sleppLevel += 3;
        this.foodLevel -= 1;
        console.log(`[${this.name} прилiг здрiмнути]`);
        this.infoAboutPets();
        this.hungry();
        this.happy();
        this.tired();
    },

    playCSGO() {
        this.healthLevel -= 1;
        this.happinessLevel += 3;
        this.sleppLevel -= 1;
        this.foodLevel -= 1;
        console.log(`[${this.name} пограв з вами в CSGO]`);
        this.infoAboutPets();
        this.hungry();
        this.happy();
        this.tired();
    },

    learningJavaScript() {
        this.healthLevel -= 1;
        this.sleppLevel -= 1;
        this.happinessLevel += 3;
        this.foodLevel -= 1;
        console.log(`[${this.name} порозмовляв з тобою]`);
        this.infoAboutPets();
        this.hungry();
        this.happy();
        this.tired();
    },

    autoPlay() {
        const radomMethod = Math.floor(Math.random() * 5);
        switch (radomMethod) {
            case 0:
                this.eat();
                break;
            case 1:
                this.goingShop();
                break;
            case 2:
                this.sleep();
                break;
            case 3:
                this.playCSGO();
                break;
            default:
                this.learningJavaScript();
        }
    },
};

const cat = Object.create(tamagochi);
cat.name = 'Рижулiчка';

const promise = new Promise((resolve) => {
    let counter = 0;
    const timerId = setInterval(() => {
        cat.autoPlay();
        counter += 0.5;
        if (cat.healthLevel <= 0 || cat.happinessLevel <= 0 || cat.sleppLevel <= 0 || cat.foodLevel <= 0) {
            clearInterval(timerId);
            resolve(counter);
        }
    }, 500);
});

promise.then((counter) => {
    console.log(`Ваш питомець прожив ${counter} секунд`);
});
