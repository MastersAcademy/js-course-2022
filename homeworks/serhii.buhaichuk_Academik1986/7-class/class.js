class Car {
    constructor(options) {
        this.engine = options.engine;
        this.wheels = options.wheels;
        this.tires = options.tires;
        this.type = options.type;
        this.size = options.size;
        this.weight = options.weight;
    }
}

class Engine {
    constructor(options) {
        this.volume = options.volume;
        this.power = options.power;
    }
}

const engineToyota = new Engine({
    volume: '3.5 L',
    power: '289 hp',
});

const engineHonda = new Engine({
    volume: '2.5 L',
    power: '300 hp',
});

const engineInfiniti = new Engine({
    volume: '4.5 L',
    power: '300 hp',
});

class Tires {
    constructor(options) {
        this.radius = options.radius;
        this.width = options.width;
    }
}

const tiresToyota = new Tires({
    radius: 'R 14',
    width: 185,
});

const tiresHonda = new Tires({
    radius: 'R 18',
    width: 185,
});

const tiresInfiniti = new Tires({
    radius: 'R 22',
    width: 185,
});

class Size {
    constructor(options) {
        this.heigth = options.heigth;
        this.width = options.width;
        this.extent = options.extent;
    }
}

const sizeToyota = new Size({
    heigth: '3000mm',
    width: '2500mm',
    extent: '4000mm',
});

const sizeHonda = new Size({
    heigth: '2000mm',
    width: '2500mm',
    extent: '3000mm',
});

const sizeInfiniti = new Size({
    heigth: '2000mm',
    width: '2500mm',
    extent: '3000mm',
});

const Toyota = new Car({
    engine: engineToyota,
    wheels: [1, 2, 3, 4],
    tires: tiresToyota,
    type: 'Cupe',
    size: sizeToyota,
    weight: '1000 kg',
});

const Honda = new Car({
    engine: engineHonda,
    wheels: [1, 2, 3, 4],
    tires: tiresHonda,
    type: 'Sedan',
    size: sizeHonda,
    weight: '2000 kg',
});

const Infiniti = new Car({
    engine: engineInfiniti,
    wheels: [1, 2, 3, 4],
    tires: tiresInfiniti,
    type: 'Sedan',
    size: sizeInfiniti,
    weight: '5000 kg',
});

console.log(Toyota);
console.log(Honda);
console.log(Infiniti);

