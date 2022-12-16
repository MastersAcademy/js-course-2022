const tamagochi = {
    nameToy: 'Toy',
    healthLevel: 50,
    hungryLevel: 50,
    sleepLevel: 50,
    // метод який зменшує показники, стан коли про персонажа не дбають
    decrease: function () {
        this.healthLevel -= 1;
        this.hungryLevel -= 2;
        this.sleepLevel -= 5;
    },
    // метод який збільшує показники, стан коли піклуються про персонажа
    increase: function () {
        this.healthLevel += 0.5;
        this.hungryLevel += 1;
        this.sleepLevel += 2.5;
    },
    // метод, що перевіряє один з показників
    health: function () {
        if (this.healthLevel > 0) {
            return true;
        }
        return false;
    },
    // метод, що перевіряє один з показників
    hungry: function () {
        if (this.hungryLevel > 0) {
            return true;
        }
        return false;
    },
    // метод, що перевіряє один з показників
    sleep: function () {
        if (this.sleepLevel > 0) {
            return true;
        }
        return false;
    },
    // метод, що перевіряє загальний стан персонажа
    happy: function () {
        if ((this.health() && this.hungry() && this.sleep()) === true) {
            return `${this.nameToy} is happy`;
        }
        return `${this.nameToy} is dead`;
    },
};
// 10 використань методу зменшення показників призводять до смерті персонаж
// за 10 викликів на нуль зміниться найбільш витратний показник
for (let i = 0; i < 10; i++) {
    tamagochi.decrease()
    console.log(tamagochi.happy())
}
