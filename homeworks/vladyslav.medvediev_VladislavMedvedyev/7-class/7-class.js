// eslint-disable-next-line max-classes-per-file
class Engine {
    constructor(capacity, power) {
        this.capacity = `${capacity} l`;
        this.power = `${power} hp`;
    }
}

class Wheel {
    constructor(radius, width) {
        this.radius = `${radius} inch`;
        this.width = `${width} mm`;
    }
}

class Size {
    constructor(height, width, length) {
        this.height = `${height} mm`;
        this.width = `${width} mm`;
        this.length = `${length} mm`;
    }
}

class Car {
    constructor(engine, wheels, bodyType, size, weight) {
        this.engine = engine;
        this.wheels = wheels;
        this.bodyType = `Bodytype ${bodyType}`;
        this.size = size;
        this.weight = `Weight ${weight} kg`;
    }
}

const createEngine = new Engine(2, 150);
const createWheel = new Wheel(16, 210);
const arrayOfWheels = [createWheel, createWheel, createWheel, createWheel];
const createSize = new Size(1500, 1800, 4900);

const car = new Car(createEngine, arrayOfWheels, 'sedan', createSize, 1500);
console.log(car);
