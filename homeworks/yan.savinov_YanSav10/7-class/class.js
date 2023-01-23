class Car {
    constructor(engine, arrayOfWheels, type, size, weight) {
        this.engine = engine;
        this.arrayOfWheels = arrayOfWheels;
        this.type = type;
        this.size = size;
        this.weight = weight;
    }
}

class Engine {
    constructor(volume, power) {
        this.volume = volume;
        this.power = power;
    }
}

class Wheel {
    constructor(radius, width) {
        this.radius = radius;
        this.width = width;
    }
}

class Size {
    constructor(height, width, length) {
        this.height = height;
        this.width = width;
        this.length = length;
    }
}

const myEngine = new Engine('4,0 L', '450 HP');
const myWheel1 = new Wheel('18 inch', '7 inch');
const myWheel2 = new Wheel('18 inch', '7 inch');
const myWheel3 = new Wheel('18 inch', '7 inch');
const myWheel4 = new Wheel('18 inch', '7 inch');
const mySize = new Size('150 cm', '200 cm', '350 cm');
const myCar = new Car(myEngine, [myWheel1, myWheel2, myWheel3, myWheel4], 'Sedan', mySize, '2000 kg');
console.log(myCar);
