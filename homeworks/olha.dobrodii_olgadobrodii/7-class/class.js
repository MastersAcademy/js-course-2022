class Avto {
    constructor (engine, wheel_array, body_type, dimensions, weight) {
        this.engine = engine;
        this.wheel_array = wheel_array;
        this.body_type = body_type;
        this.dimensions = dimensions;
        this.weight = weight;
    }
}

class Engine {
    constructor (volume, power) {
        this.volume = volume;
        this.power = power;
    }
}

class Wheel {
    constructor (radius, width) {
        this.radius = radius;
        this.width = width;
    }
}

class Size {
    constructor (height, width, length) {
        this.height = height;
        this.width = width;
        this.length = length;
    }
}

let car = [
    new Car('avto','engine'),
    new Car('avto','engine','wheel_array')
];
console.log(Avto);