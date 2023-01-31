class Auto {
    constructor(autoParams) {
        this.autoParams = autoParams;
    }

    show() {
        console.log(this.autoParams);
    }
}

class Engine {
    constructor(volume, power) {
        this.volume = volume;
        this.power = power;
    }
}

class Size {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
}

class Tire {
    constructor(radius, width) {
        this.radius = radius;
        this.width = width;
    }
}
const daf430 = {
    name: 'DAF',
    engine: new Engine('12.9 l', '350 kWt'),
    tire: new Tire('315', '22.5'),
    size: new Size('8620 mm', '2500 mm', '3700 mm'),
};

const ca8644ca = new Auto(daf430);
ca8644ca.show();
