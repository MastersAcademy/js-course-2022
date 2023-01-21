class Auto {
    constructor(plate, autoParams) {
        this.plate = plate;
        this.autoParams = autoParams;
    }

    show() {
        console.log(this.plate);
        console.log(this.autoParams);
    }
}

class Engine {
    constructor(volume, power) {
        this.volume = volume;
        this.power = power;
    }

    get engineVolume() {
        return this.volume;
    }

    get enginePower() {
        return this.power;
    }
}

class Tire {
    constructor(radius, width) {
        this.radius = radius;
        this.width = width;
    }

    get tireRadius() {
        return this.radius;
    }

    get tireWidth() {
        return this.width;
    }
}

class Size {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    get sizeL() {
        return this.length;
    }

    get sizeW() {
        return this.width;
    }

    get sizeH() {
        return this.height;
    }
}
const daf430Engine = new Engine('12.9 l', '350 kWt');
const daf430Tire = new Tire('315', '22.5');
const daf430Size = new Size('8620 mm', '2500 mm', '3700 mm');
const daf430 = {
    name: 'DAF',
    engine: { volume: daf430Engine.engineVolume, power: daf430Engine.power },
    tire: { radius: daf430Tire.tireRadius, width: daf430Tire.tireWidth },
    size: { length: daf430Size.sizeL, width: daf430Size.sizeW, height: daf430Size.sizeH },
};

const ca8644ca = new Auto('CA8644CA', daf430);
ca8644ca.show();
