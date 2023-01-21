const Engine = require('./engine');
const Wheel = require('./wheel');
const Dimensions = require('./dimensions');

class Car {
    constructor(engine, wheelArray, bodyType, dimensions, weight) {
        this.engine = engine;
        this.wheelArray = wheelArray;
        this.bodyType = bodyType;
        this.dimensions = dimensions;
        this.weight = weight;
    }

    toString() {
        return (`${this.engine}
                 ${this.wheelArray} 
                 bodyType: ${this.bodyType} 
                 ${this.dimensions} 
                 weight: ${this.weight} kg`);
    }
}

const engine = new Engine(2.5, 200);
const wheelArray = new Wheel(15, 185);
const bodyType = 'sedan';
const dimensions = new Dimensions(1500, 1800, 4500);
const weight = '1200';
const car = new Car(engine, wheelArray, bodyType, dimensions, weight);

console.log(car.toString());
