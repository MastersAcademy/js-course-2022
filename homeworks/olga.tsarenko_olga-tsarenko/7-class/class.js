class Car {
    constructor(body, weight, params) {
        this.body = body;
        this.weight = weight;
        this.params = params;
    }

    drive() {
        console.log(this);
    }
}

class Engine {
    constructor(volume, power) {
        this.volume = volume;
        this.power = power;
    }
}

class Wheels {
    constructor(radius, width) {
        this.radius = radius;
        this.wheelWidth = width;
    }
}

class CarSize {
    constructor(height, length, width) {
        this.height = height;
        this.length = length;
        this.width = width;
    }
}

const engine1 = new Engine(1.6, 75);
const wheels1 = new Wheels(7, 5);
const size1 = new CarSize(1.5, 4.3, 1.8);

const carParams = {
    engine1,
    wheels1,
    size1,
};

const mazda = new Car('minivan', 1000, carParams);
mazda.drive();
