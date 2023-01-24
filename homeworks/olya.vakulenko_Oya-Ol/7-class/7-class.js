class Car {
    constructor(name, engine, wheels, body, size, weight) {
        this.name = name;
        this.engine = engine;
        this.wheels = wheels;
        this.body = body;
        this.size = size;
        this.weight = weight;
    }

    displayStatus() {
        const status = `Name: ${this.name}\n`
            + `Engine: ${this.engine}\n`
            + `Wheels: ${this.wheels}\n`
            + `Body: ${this.body}\n`
            + `Size: ${this.size}\n`
            + `Weight: ${this.weight}kg\n`;
        console.log(status);
    }
}

class Engine {
    constructor(volume, power) {
        this.volume = volume;
        this.power = power;
    }

    toString() {
        return `${(this.volume)}l, ${(this.power)}h.p.`;
    }
}

class Wheels {
    constructor(radius, width) {
        this.radius = radius;
        this.width = width;
    }

    toString() {
        return `${(this.radius)}mm, ${(this.width)}mm;\n`;
    }
}

class Size {
    constructor(width, height, length) {
        this.width = width;
        this.height = height;
        this.length = length;
    }

    toString() {
        return `${(this.width)}mm, ${(this.height)}mm, ${(this.length)}mm`;
    }
}

const newWheels = [new Wheels(235, 65),
    new Wheels(235, 65),
    new Wheels(235, 65),
    new Wheels(235, 65)];

const newEngine = new Engine(3, 340);
const newSize = new Size(4878, 1984, 1717);
const newCar = new Car('Volkswagen', newEngine, newWheels, 'SUV', newSize, 3436);

newCar.displayStatus();
newEngine.toString();
newWheels.toString();
newSize.toString();
