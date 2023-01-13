const pet = {
    health: 10,
    happiness: 10,
    sleep: 10,
    food: 10,
    isToiletClean: true,

    param() {
        console.log(`
Parameters of ${this.name}:
health ${this.health}
happiness ${this.happiness}
sleep ${this.sleep}
food ${this.food}
isToiletClean ${this.isToiletClean}
        `);
    },

    isHungry() {
        if (this.food <= 3 && this.food >= 1) {
            console.log(`${this.name} is hungry`);
        }
        if (this.food <= 0) {
            console.log(`You haven't fed ${this.name} in a long time. He can't stand it anymore and dies. End of the game`);
        }
    },

    isHappy() {
        if (this.happiness <= 3 && this.happiness >= 1) {
            console.log(`${this.name} sad, he is unhappy`);
        }
        if (this.happiness <= 0) {
            console.log(`You didn't pay enough attention to ${this.name}. He runs away from you in search of a more attentive master. End of the game`);
        }
    },

    isTired() {
        if (this.sleep <= 3 && this.sleep >= 1) {
            console.log(`${this.name} wants to sleep`);
        }
        if (this.sleep <= 0) {
            console.log(`${this.name} hadn't slept for a long time. He is dying of exhaustion. End of the game`);
        }
    },

    isIll() {
        if (this.health <= 3 && this.sleep >= 1) {
            console.log(`${this.name} is ill`);
        }
        if (this.health <= 0) {
            console.log(`${this.name} got sick and died. End of the game`);
        }
    },

    useToilet() {
        const randNumber = Math.floor(Math.random() * 3);
        if (randNumber === 0) {
            if (this.isToiletClean === false) {
                console.log(`${this.name} wants use the toilet. But toilet is not clean. ${this.name} is unsatisfied`);
                this.happiness -= 2;
            } else {
                this.isToiletClean = false;
                console.log(`${this.name} used the toilet. You must clean it`);
            }
        }
    },

    feed() {
        this.health -= 1;
        this.happiness -= 1;
        this.sleep -= 1;
        this.food += 3;
        console.log(`You are feed ${this.name}`);
        this.useToilet();
        this.param();
        this.isHungry();
        this.isHappy();
        this.isTired();
        this.isIll();
    },

    walk() {
        this.health -= 1;
        this.happiness += 3;
        this.sleep -= 1;
        this.food -= 1;
        console.log(`You are walking ${this.name}`);
        this.useToilet();
        this.param();
        this.isHungry();
        this.isHappy();
        this.isTired();
        this.isIll();
    },

    putToBed() {
        this.health -= 1;
        this.happiness -= 1;
        this.sleep += 3;
        this.food -= 1;
        console.log(`You are put to bed ${this.name}`);
        this.useToilet();
        this.param();
        this.isHungry();
        this.isHappy();
        this.isTired();
        this.isIll();
    },

    play() {
        this.health -= 1;
        this.happiness += 3;
        this.sleep -= 1;
        this.food -= 1;
        console.log(`You are play with ${this.name}`);
        this.useToilet();
        this.param();
        this.isHungry();
        this.isHappy();
        this.isTired();
        this.isIll();
    },

    speak() {
        this.health -= 1;
        this.sleep -= 1;
        this.happiness += 3;
        this.food -= 1;
        console.log(`You are speak to ${this.name}. He is ${this.sound} to you`);
        this.useToilet();
        this.param();
        this.isHungry();
        this.isHappy();
        this.isTired();
        this.isIll();
    },

    cleanToilet() {
        this.happiness += 3;
        this.health -= 1;
        this.sleep -= 1;
        this.food -= 1;
        this.isToiletClean = true;
        console.log(`You are clean in the toilet. ${this.name} is satisfied`);
        this.useToilet();
        this.param();
        this.isHungry();
        this.isHappy();
        this.isTired();
        this.isIll();
    },

    treat() {
        this.health += 4;
        this.sleep -= 1;
        this.happiness -= 1;
        this.food -= 1;
        console.log(`You are treat the ${this.name}. He fells good`);
        this.useToilet();
        this.param();
        this.isHungry();
        this.isHappy();
        this.isTired();
        this.isIll();
    },

    autoplay() {
        const randMethodNumber = Math.floor(Math.random() * 7);
        switch (randMethodNumber) {
            case 0:
                this.feed();
                break;
            case 1:
                this.walk();
                break;
            case 2:
                this.putToBed();
                break;
            case 3:
                this.play();
                break;
            case 4:
                this.speak();
                break;
            case 5:
                this.cleanToilet();
                break;
            default:
                this.treat();
        }
    },
};

const cat = Object.create(pet);
cat.name = 'Tom';
cat.sound = 'meow';

const promise = new Promise((resolve) => {
    let counter = 0;
    const timerId = setInterval(() => {
        cat.autoplay();
        counter += 0.5;
        if (cat.health <= 0 || cat.happiness <= 0 || cat.sleep <= 0 || cat.food <= 0) {
            clearInterval(timerId);
            resolve(counter);
        }
    }, 500);
});

promise.then((counter) => {
    console.log(`Your pet lived ${counter} sec`);
});
