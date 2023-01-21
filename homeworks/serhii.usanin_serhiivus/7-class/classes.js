class Car {
    constructor(options) {
        this.regNumber = options.regNumber;
        this.engine = options.engine;
        this.wheelArray = [];
        this.bodyType = options.bodyType;
        this.size = options.size;
        this.weights = options.weights;
    }

    addWheel(wheel) {
        this.wheelArray.push(wheel);
    }

    get sizeInfo() {
        return this.size.info;
    }

    get engineInfo() {
        return this.engine.info;
    }

    get weightsInfo() {
        return this.weights.info;
    }

    get wheelsInfo() {
        if (!this.wheelArray) {
            return '';
        }
        return this.wheelArray.reduce((result, item) => `${result + item.info}\n`, '');
    }
}

class Engine {
    constructor(options) {
        this.capacity = options.capacity;
        this.power = options.power;
    }

    get info() {
        return `capacity: ${this.capacity}l power: ${this.power}HP`;
    }
}

class Wheel {
    constructor(options) {
        this.radius = options.radius;
        this.width = options.width;
        this.profile = options.profile;
    }

    get info() {
        return `${this.radius}"  ${this.width} X ${this.profile}`;
    }
}

class Size {
    constructor(options) {
        this.length = options.length;
        this.height = options.height;
        this.width = options.width;
    }

    get info() {
        return `${this.length} X ${this.width} X ${this.height} (m)`;
    }
}

class Weights {
    constructor(options) {
        this.curbWeight = options.curbWeight;
        this.maxWeight = options.maxWeight;
    }

    get info() {
        return `curbWeight: ${this.curbWeight}kg maxWeight: ${this.maxWeight}kg`;
    }
}

const car = new Car({ regNumber: '177-12-15' });
car.engine = new Engine({ capacity: 2, power: 150 });
car.bodyType = 'Coupe';
car.addWheel(new Wheel({ radius: 16, width: 185, profile: 50 }));
car.addWheel(new Wheel({ radius: 16, width: 185, profile: 50 }));
car.addWheel(new Wheel({ radius: 16, width: 200, profile: 55 }));
car.addWheel(new Wheel({ radius: 16, width: 200, profile: 55 }));
car.size = new Size({ length: 4, height: 1.2, width: 2 });
car.weights = new Weights({ curbWeight: 2000, maxWeight: 2500 });

console.log(car.sizeInfo);

console.log(car.engineInfo);

console.log(car.wheelsInfo);

console.log(car.weightsInfo);
