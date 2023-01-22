class Avto {
    constructor (engine, wheel_array, body_type, size, weight) {
        this.engine = engine;
        this.wheel_array = wheel_array;
        this.body_type = body_type;
        this.size = size;
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

const engine = new Engine(50, 100);
const wheels =  [   
        new Wheel(2, 20),
        new Wheel(2, 20),
        new Wheel(2, 20),
        new Wheel(2, 20)
];
const carSize = new Size(130, 130, 240);
const car = new Avto(engine, wheels, 'hatchback', carSize, 1250);

console.log(car);