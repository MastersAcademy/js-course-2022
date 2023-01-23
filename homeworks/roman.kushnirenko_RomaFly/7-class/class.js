class Auto {
    constructor(engine, wheelsArray, bodyType, size, weight) {
        this.engine = engine;
        this.wheels = wheelsArray;
        this.bodyType = bodyType;
        this.size = size;
        this.weight = `${weight} kg`;
    }

    showInfo() {
        const autoData = `Engine: ${this.engine}`
                    + `\nWheels: ${this.wheels}`
                    + `\nBodyType: ${this.bodyType}`
                    + `\nSize: ${this.size}`
                    + `\nWeight: ${this.weight}`;

        return console.log(autoData);
    }
}

class Engine {
    constructor(volume, power) {
        this.volume = volume;
        this.power = `${power} horsepower`;
    }

    toString() {
        return `${(this.volume)}, ${(this.power)}`;
    }
}

class Wheel {
    constructor(radius, width) {
        this.radius = radius;
        this.width = width;
    }

    toString() {
        return `${(this.radius)}, ${(this.width)} inches`;
    }
}

class Sizes {
    constructor(height, width, length) {
        this.height = `${height}mm`;
        this.width = `${width}mm`;
        this.length = `${length}mm`;
    }

    toString() {
        return `${(this.height)}, ${(this.width)}, ${(this.height)}`;
    }
}

const dieselEngine = new Engine(4, 650);

const wheelFront1 = new Wheel(16, 205);
const wheelFront2 = new Wheel(16, 205);
const wheelBack3 = new Wheel(16, 210);
const wheelBack4 = new Wheel(16, 210);
const wheels = [wheelFront1, wheelFront2, wheelBack3, wheelBack4];

const sizeAuto = new Sizes(1500, 2050, 3000);

const typeAuto = 'Minivan';
const weightAuto = 1800;

const volkswagenPassat = new Auto(dieselEngine, wheels, typeAuto, sizeAuto, weightAuto);

volkswagenPassat.showInfo();

class NodeRequest {
    constructor() {
        this.url = process.argv;
    }

    getInformation() {
        fetch(this.url[2])
            .then((response) => response.json())
            .then((json) => console.log(`The information from website ${this.url[2]}:\n`, json))
            .catch((error) => console.error('Error, try again or enter correct url', error));
    }
}

const requestToServer = new NodeRequest();

requestToServer.getInformation();
