const tamagochi = {
    nameToy: 'Toy',
    healthLevel: 50,
    hungryLevel: 50,
    sleepLevel: 50,
    // метод який зменшує показники, стан коли про персонажа не дбають
    decrease() {
        this.healthLevel -= 1;
        this.hungryLevel -= 2;
        this.sleepLevel -= 5;
    },
    // метод який збільшує показники, стан коли піклуються про персонажа
    increase() {
        this.healthLevel += 0.5;
        this.hungryLevel += 1;
        this.sleepLevel += 2.5;
    },
    // метод, що перевіряє один з показників
    health() {
        if (this.healthLevel > 0) {
            return true;
        }
        return false;
    },
    // метод, що перевіряє один з показників
    hungry() {
        if (this.hungryLevel > 0) {
            return true;
        }
        return false;
    },
    // метод, що перевіряє один з показників
    sleep() {
        if (this.sleepLevel > 0) {
            return true;
        }
        return false;
    },
    // метод, що перевіряє загальний стан персонажа
    happy() {
        if ((this.health() && this.hungry() && this.sleep()) === true) {
            return `${this.nameToy} is happy`;
        }
        return `${this.nameToy} is dead`;
    },
};

console.log(tamagochi);
