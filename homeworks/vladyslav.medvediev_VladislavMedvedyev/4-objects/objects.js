const pet = {
    life: 10,
    happiness: 10,
    sleep: 10,
    isToiletClean: true,

    param() {
        console.log(`
        Parameters of ${this.name}:
        life ${this.life}
        happiness ${this.happiness}
        sleep ${this.sleep}
        isToiletClean ${this.isToiletClean}
        `);
    },

    isHungry() {
        if (this.life <= 3 && this.life >= 1) {
            console.log(`${this.name} is hungry`);
        }
        if (this.life <= 0) {
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
        this.life = 10;
        this.happiness += 1;
        this.sleep -= 1;
        console.log(`You are feed ${this.name}`);
        this.useToilet();
        this.param();
        this.isHungry();
        this.isHappy();
        this.isTired();
    },

    walk() {
        this.life -= 1;
        this.happiness += 2;
        this.sleep -= 1;
        console.log(`You are walking ${this.name}`);
        this.useToilet();
        this.param();
        this.isHungry();
        this.isHappy();
        this.isTired();
    },

    putToBed() {
        this.life -= 3;
        this.happiness -= 1;
        this.sleep = 10;
        console.log(`You are put to bed ${this.name}`);
        this.useToilet();
        this.param();
        this.isHungry();
        this.isHappy();
        this.isTired();
    },

    play() {
        this.life -= 1;
        this.happiness += 3;
        this.sleep -= 1;
        console.log(`You are play with ${this.name}`);
        this.useToilet();
        this.param();
        this.isHungry();
        this.isHappy();
        this.isTired();
    },

    speak() {
        this.life -= 1;
        this.sleep -= 1;
        console.log(`You are speak to ${this.name}. He is ${this.sound} to you`);
        this.useToilet();
        this.param();
        this.isHungry();
        this.isHappy();
        this.isTired();
    },

    cleanToilet() {
        this.happiness += 1;
        this.isToiletClean = true;
        console.log(`You are clean in the toilet. ${this.name} is satisfied`);
        this.param();
    },
};

const cat = Object.create(pet);
cat.name = 'Tom';
cat.sound = 'meow';

const dog = Object.create(pet);

dog.name = 'Patron';
dog.sound = 'wow';

cat.feed();
cat.walk();
cat.putToBed();
cat.play();
cat.speak();
cat.cleanToilet();
cat.param();

dog.feed();
dog.walk();
dog.putToBed();
dog.play();
dog.speak();
dog.cleanToilet();
dog.param();
