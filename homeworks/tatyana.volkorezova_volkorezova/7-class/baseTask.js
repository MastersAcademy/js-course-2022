const WHEEL_AMOUNT = 4;
const wheelsPackForVolvo = [];

class Car {
    constructor(motor, carWheels, kuzovType, sizes, weight) {
        this.motor = motor;
        this.carWheels = carWheels;
        this.kuzovType = kuzovType;
        this.sizes = sizes;
        this.weight = weight;
    }
}

class Motor {
    constructor(capacity, energy) {
        this.capacity = capacity;
        this.energy = energy;
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

for (let i = 0; i <= WHEEL_AMOUNT - 1; i++) {
    wheelsPackForVolvo[i] = new Wheel('16 duyms', '200 mm');
}

const motorForVolvo = new Motor('4 liters', '300 horse power');
const sizeVolvo = new Size('200 sm', '100 sm', '700 sm');
const customVolvo = new Car(motorForVolvo, wheelsPackForVolvo, 'Kupe', sizeVolvo, '4 tons');
console.log(customVolvo);
