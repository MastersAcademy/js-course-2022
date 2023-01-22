class Name {
    constructor(carName) {
        this.name = carName;
    }
}

class Engine {
    constructor(engineParameters) {
        this.volume = engineParameters.volume;
        this.power = engineParameters.power;
    }
}

class Wheels {
    constructor(wheelParameters) {
        this.wheels = this.getWheelsArray(wheelParameters);
    }

    getWheelsArray(wheelParameters) {
        const array = []; 
        while (array.length < 4) {
            array.push(wheelParameters);     
        }
        return array;
    }
}

class Body {
    constructor(bodyType) {
        this.type = bodyType;
    }
}

class BodySize {
    constructor(sizeParameters) {
        this.width = sizeParameters.width;
        this.height = sizeParameters.height;
        this.lenght = sizeParameters.lenght;
    }
}

class BodyWeight {
    constructor(weightParameter) {
        this.weight = weightParameter;
    }
}

class Car{
    #name;
    #engine;
    #wheels;
    #body;
    #size;
    #weight;

    constructor(data) {
        this.#name = new Name(data.name);
        this.#engine = new Engine(data.engine);
        this.#wheels = new Wheels(data.wheels);
        this.#body = new Body(data.body);
        this.#size = new BodySize(data.size);
        this.#weight = new BodyWeight(data.weight);
        this.myCar = this.processData();
    } 

    formatData(carParameter, accum) {
        for(let [key, value] of Object.entries(carParameter)){
            const isNamesEqual = (carParameter.constructor.name.toLowerCase() == key);
            if (isNamesEqual){
                accum[`${key[0].toUpperCase()}${key.slice(1)} `] = value;
            } else { accum[`${carParameter.constructor.name} ${key}`] = value; }
        }
        return accum;
    }

    processData() {
        const carParameters = [this.#name, this.#engine, this.#wheels, this.#body, this.#size, this.#weight];
        const data = carParameters.reduce((accum, carParameter) => {
            return this.formatData(carParameter, accum, carParameter.constructor.name);
        }, {});
        return data;
    }
}

module.exports = Car;
