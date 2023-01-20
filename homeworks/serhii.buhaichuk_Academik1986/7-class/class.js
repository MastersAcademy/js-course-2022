class Car {
    constructor(options) {
        this.engine = options.engine;
        this.tires = options.tires;
        this.type = options.type;
        this.size = options.size;
        this.weight = options.weight;
    }
}

const toyota = new Car({
    engine: 'gasoline',
    tires: [1, 2, 3, 4],
    type: 'sedan',
    size: 'XL',
    weight: '1000 kg',
});

const honda = new Car({
    engine: 'diesel',
    tires: [1, 2, 3, 4],
    type: 'sedan',
    size: 'XXL',
    weight: '1500 kg',
});

console.log(honda);
console.log(toyota);

class Engine {
    constructor(options) {
        this.value = options.value;
        this.power = options.power;
    }
}
const diesel = new Engine({
    value: '2.5 L',
    power: '175 HP',
});
const gas = new Engine({
    value: '2.2 L',
    power: '150 HP',
});
console.log(diesel);
console.log(gas);

class Tires {
    constructor(options) {
        this.radius = options.radius;
        this.width = options.weight;
    }
}

const tire = new Tires({
    radius: 'R 14',
    width: 185,
});
console.log(tire);

class Size {
    constructor(options) {
        this.height = options.height;
        this.width = options.width;
        this.extent = options.extent;
    }
}

const sedan = new Size({
    height: '2000 mm',
    width: '1800 mm',
    extent: '3000 mm',
});

const coupe = new Size({
    height: '2000 mm',
    width: '1500 mm',
    extent: '2500 mm',
});

const liftback = new Size({
    height: '2500 mm',
    width: '1800 mm',
    extent: '4000 mm',
});

console.log(sedan);
console.log(coupe);
console.log(liftback);
