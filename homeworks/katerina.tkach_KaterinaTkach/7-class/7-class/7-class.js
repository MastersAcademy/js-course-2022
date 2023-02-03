class auto {
    constructor(engine, carWheels, carBodyType, carDimentions, carWeight) {
        this.engine = engine;
        this.carWheels = carWheels;
        this.carBodyType = carBodyType;
        this.carDimentions = carDimentions;
        this.carWeight = carWeight;
    }
}
class engine {
    constructor(volume, power) {
        this.volume = volume;
        this.power = power;
    }
}
class carWheels {
    constructor(radius, width) {
        this.radius = radius;
        this.width = width;
    }
}
class carDimentions {
    constructor(carHeight, carWidth, carLenght) {
        this.carHeight = carHeight;
        this.carWidth = carWidth;
        this.carLenght = carLenght;
    }
}
console.log(auto, engine, carWheels, carDimentions);

class Engine {
    constructor(volume) {
        this.volume = volume;
    }
}
class Size {
    constructor(sizes) {
        this.height = sizes.height;
        this.width = sizes.width;
        this.length = sizes.length;
    }
}
class Wheel {
    constructor(props) {
        this.radius = props.radius;
        this.width = props.width;
    }

    roll() {
        console.log('wheel rolls');
    }
}

class Car extends Size {
    constructor(sizes, volume, wheel) {
        super(sizes);

        this.engine = new Engine(volume);
        this.wheels = [
            new Wheel(wheel),
            new Wheel(wheel),
            new Wheel(wheel),
            new Wheel(wheel),
        ];
    }

    drive() {
        console.log('Car drive');

        this.wheels.forEach((wheel) => wheel.roll());
    }
}

const MyCar = new Car({ width: 2, height: 1.5, length: 4 }, '2l', { radius: 17, width: 7 });

console.log(MyCar);

MyCar.drive();
