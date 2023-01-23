class Car {
    constructor() {
        this.car = {
            enginePower: '',
            bodyType: '',
            radiusWheels: '',
            dimensions: '',
            weight: 0,
            height: 0,
            height: 0
        };
        this.enginePower = {
            volume: 0,
            power: 0,
        };
        this.radiusWheels = {
            radius: 0,
            width: 0,
        };
        this.size = {
            height: 0,
            width: 0,
            length: 0,
        };
    }
}

const bmwM4G82 = new Car();

bmwM4G82.car = {
    name: 'BMW M4-G82',
    engine: 'disel [S55 TT I6]',
    wheels: {
        radius: 275,
        width: 35,
    },
    bodyType: 'sedan',
    dimensions: 'long',
    weight: 2155,
};

bmwM4G82.engine = {
    volume: 3.0,
    power: 480,
};

bmwM4G82.wheel = {
    radius: 275,
    width: 35,
};

bmwM4G82.size = {
    height: 1393,
    width: 1887,
    length: 4794,
};

const mercedesC63S = new Car();

mercedesC63S.car = {
    name: 'Mercedes C63S',
    engine: 'petrol [V8]',
    wheels: {
        radius: 265,
        width: 35,
    },
    bodyType: 'sedan',
    dimensions: 'long',
    weight: 2180,
};

mercedesC63S.engine = {
    volume: 4.0,
    power: 510,
};

mercedesC63S.wheel = {
    radius: 265,
    width: 35,
};

mercedesC63S.size = {
    height: 1442,
    width: 1810,
    length: 4686,
};

console.log(bmwM4G82.car);
console.log(mercedesC63S.car);
