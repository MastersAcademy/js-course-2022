class Car {
    constructor(engine, wheelArray, bodyStyle, dimensions, weight) {
        this.engine = engine;
        this.wheelArray = wheelArray;
        this.bodyStyle = bodyStyle;
        this.dimensions = dimensions;
        this.weight = weight;
    }
}

class Engine {
    constructor(capacity, power) {
        this.capacity = capacity;
        this.power = power;
    }
}

class Wheel {
    constructor(radius, width) {
        this.radius = radius;
        this.width = width;
    }
}

class Dimensions {
    constructor(height, width, length) {
        this.height = height;
        this.width = width;
        this.length = length;
    }
}

const engineR8 = new Engine('5,204 cc (5.2 L) DOHC FSI V10', '610 PS');
const wheelR8 = new Wheel(20, '18x10.5');
const sizeR8 = new Dimensions(1252, 1930, 4435);
const audiR8 = new Car(engineR8, wheelR8, '2-door coupe', sizeR8, 1825);

console.log(engineR8);
console.log(wheelR8);
console.log(sizeR8);
console.log(audiR8);
