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

class CarWheel {
    constructor(radius, wheelWidth) {
        this.radius = radius;
        this.wheelWidth = wheelWidth;
    }
}

class CarSize {
    constructor(height, width, carLength) {
        this.height = height;
        this.width = width;
        this.carLength = carLength;
    }
}

for (let i = 1; i <= WHEEL_AMOUNT; i++) {
    wheelsPackForVolvo[i] = new CarWheel('16 duyms', '200 mm');
}

const motorForVolvo = new Motor('4 liters', '300 horse power');
const sizeVolvo = new CarSize('200 sm', '100 sm', '700 sm');
const customVolvo = new Car(motorForVolvo, wheelsPackForVolvo, 'Kupe', sizeVolvo, '4 tons');
console.log(customVolvo);
