class Auto {
    constructor(engine, wheelsArray, bodyType, size, weight) {
        this.engine = engine;
        this.wheels = wheelsArray;
        this.bodyType = bodyType;
        this.size = size;
        this.weight = `${weight} kg`;
    }
}

class Engine {
    constructor(volume, power) {
        this.volume = volume;
        this.power = `${power} horsepower`;
    }
}

class Wheel {
    constructor(radius, width) {
        this.radius = radius;
        this.width = width;
    }
}

class Sizes {
    constructor(height, width, length) {
        this.height = `${height}mm`;
        this.width = `${width}mm`;
        this.length = `${length}mm`;
    }
}

const dieselEngine = new Engine(4, 650);

const wheelFront1 = new Wheel(16, 205);
const wheelFront2 = new Wheel(16, 205);
const wheelBack3 = new Wheel(16, 210);
const wheelBack4 = new Wheel(16, 210);
const wheels = [wheelFront1, wheelFront2, wheelBack3, wheelBack4];

const typeAuto = 'Minivan';

const sizeAuto = new Sizes(1500, 2050, 3000);

const weight = 1800;

const volkswagenPassat = new Auto(dieselEngine, wheels, typeAuto, sizeAuto, weight);

console.log(volkswagenPassat);

class NodeRequest {
    constructor() {
        this.url = process.argv;
    }

    async getInformation() {
        await fetch(this.url[2])
            .then((response) => response.json())
            .then((json) => console.log(`The information from website ${this.url[2]}:\n`, json))
            .catch(() => console.error('Error, try again or enter correct url'));
    }
}

const requestToServer = new NodeRequest();

requestToServer.getInformation();
