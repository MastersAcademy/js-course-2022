const Car = require('./class.js');

class Fetch {
    constructor(url) {
        this.data;
        this.fetchData(url);
        
    }

    async fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        this.data = data;
        this.getRandomCar();

    }

    getRandomCar() {
        const randomNumber = Math.floor(Math.random() * 6);

        console.log(new Car(this.data[randomNumber]));
    }
}
new Fetch('https://my-json-server.typicode.com/K1Koff/JSON-server/cars');