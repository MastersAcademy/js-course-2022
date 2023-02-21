const Car = require('./class.js');

class Fetch {
    #fetchUrl;
    #whichCarToShow;

    constructor() {
        this.#fetchUrl = process.argv[2];
        this.#whichCarToShow = process.argv[3];
        this.data;
        this.fetchData();
    }

    async fetchData() {
        const response = await fetch(this.#fetchUrl);
        const data = await response.json();

        this.data = data;
        (this.#whichCarToShow === undefined)? this.showCarsList(): this.showCertainCar();
    }

    showCertainCar() {
        console.log(`Car ${this.#whichCarToShow} shown`);
        const certainCar = new Car(this.data[+this.#whichCarToShow - 1]);
        console.log(certainCar.myCar);
    }

    showCarsList() {
        this.data.forEach((carInfo, index) => {
            console.log(`Car ${index + 1}:`);
            const nextCar = new Car(carInfo);
            console.log(nextCar.myCar);
        });
    }
}
new Fetch();
