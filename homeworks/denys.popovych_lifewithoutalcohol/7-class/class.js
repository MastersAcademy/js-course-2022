const { CarEngine } = require('./car-engine.js');
const { CarWheel } = require('./car-wheel.js');
const { CarSize } = require('./car-size.js');

class Car {
    constructor(option) {
        this.engine = option.engine;
        this.wheels = option.wheels;
        this.body = option.body;
        this.size = option.size;
        this.weight = option.weight;
    }

    showAllParams() {
        console.log(this);
    }
}

function getCountWheels(obj) {
    const wheels = [];
    for (let i = 0; i < 4; i++) {
        wheels.push(obj);
    }
    return wheels;
}

const lexusCar = new Car({
    engine: new CarEngine('2 l', '245 hp'),
    wheels: getCountWheels(new CarWheel('374 mm', '185 mm')),
    body: 'sedan',
    size: new CarSize('1455 mm', '1839 mm', '4850 mm'),
    weight: '1865 kg',
});

lexusCar.showAllParams();
