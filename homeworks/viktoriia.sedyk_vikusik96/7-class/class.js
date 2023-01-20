class Car {
    constructor() {
        this.car = {
            engine: '',
            wheels: [],
            bodyType: '',
            dimensions: '',
            weight: 0,
        };
        this.engine = {
            volume: 0,
            power: 0,
        };
        this.wheel = {
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

const audiA6 = new Car();

audiA6.car = {
    engine: 'petrol',
    wheels: [{
        radius: 245,
        width: 45,
    },
    {
        radius: 245,
        width: 45,
    },
    {
        radius: 245,
        width: 45,
    },
    {
        radius: 245,
        width: 45,
    },
    ],
    bodyType: 'sedan',
    dimensions: 'small',
    weight: 1450,
};

audiA6.engine = {
    volume: 1.6,
    power: 110,
};

audiA6.wheel = {
    radius: 245,
    width: 45,
};

audiA6.size = {
    height: 1452,
    width: 1810,
    length: 4796,
};
