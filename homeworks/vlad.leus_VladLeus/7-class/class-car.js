class Car {
    constructor(params) {
        this.engine = params.engine;
        this.wheels = params.wheels;
        this.type = params.type;
        this.size = params.size;
        this.weight = params.weight + 'kg';
    }

    myCar() {
        console.log(`Your car has next characteristics: \n
        Engine: ${this.engine.print()}, \n
        Wheels: ${this.wheels.map(element => element.print())}, \n
        Type: ${this.type}, \n
        Size: ${this.size.print()}, \n
        Weight: ${this.weight}`);
    }
}

class Engine {
    constructor(volume, power) {
        this.volume = volume + 'l';
        this.power = power + 'h.p.';
    }

    print() {
        return `${this.volume}/${this.power}`;
    }
}

class Wheel {
    constructor(radius, width) {
        this.radius = radius + '-inches';
        this.width = width + 'mm';
    }

    print() {
        return ` ${this.radius}/${this.width}`;
    }
}

class Size {
    constructor(height, width, length) {
        this.height = height + 'mm';
        this.width = width + 'mm';
        this.length = length + 'mm';
    }

    print() {
        return `height: ${this.height}, width: ${this.width}, length: ${this.length}`;
    }
}

const car = new Car({
    engine: new Engine(1.6, 125),
    wheels: [new Wheel(8, 205), new Wheel(8, 215), new Wheel(8.5, 215), new Wheel(9, 235)],
    type: 'station wagon',
    size: new Size(1505, 1823, 4556),
    weight: 1312
});

/* All characteristics are real, prototype is Ford Focus Trend (1.6 MT) station wagon */
car.myCar();
