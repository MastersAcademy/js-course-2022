const EngineSize = require('./engineSize');
const Wheel = require('./wheel');
const Dimensions = require('./dimensions');

class Auto {
    constructor(engine, arrayOfWheels, body, size, weight) {
        this.engine = engine;
        this.arrayOfWheels = arrayOfWheels;
        this.body = body;
        this.size = size;
        this.weight = weight;
    }
}
const engine = new EngineSize(2, 235);
const wheel1 = new Wheel(19, 100);
const wheel2 = new Wheel(19, 100);
const wheel3 = new Wheel(19, 110);
const wheel4 = new Wheel(19, 110);
const arrayOfWheels = [wheel1, wheel2, wheel3, wheel4];
const body = 'passenger';
const size = new Dimensions(1443, 1741, 4694);
const weight = 1745;
const myCar = new Auto(engine, arrayOfWheels, body, size, weight);

console.log(myCar.size);
