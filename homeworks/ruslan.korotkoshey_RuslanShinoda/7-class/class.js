class Engine {
    constructor(capacity, power) {
        this.capacity = capacity;
        this.power = power;
    }
}

class Wheel {
    constructor(radius, diameter) {
        this.radius = radius;
        this.diameter = diameter;
    }
}

class Dimensions {
    constructor(height, width, length) {
        this.height = height;
        this.width = width;
        this.length = length;
    }
}

class Car {
    constructor(capacity, power, radius, diameter, bodyStyle, height, width, length, weight) {
        this.engine = new Engine(capacity, power);
        this.wheelArray = new Wheel(radius, diameter);
        this.bodyStyle = bodyStyle;
        this.dimensions = new Dimensions(height, width, length);
        this.weight = weight;
    }
}

const audiR8 = new Car('5,204 cc (5.2 L) DOHC FSI V10', '610 PS', 20, '18x10.5', '2-door coupe', 1252, 1930, 4435, 1825);

console.log(audiR8);
