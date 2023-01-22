class Name {
    constructor(carName) {
        this.name = carName;
    }
}

class Engine {
    constructor(engineParameters) {
        this.engineVolume = engineParameters.volume;
        this.enginePower = engineParameters.power;
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
    constructor(bodyParameters) {
        this.type = bodyParameters.type;
        this.weight = bodyParameters.weight;
    }
}

class BodySize {
    constructor(sizeParameters) {
        this.width = sizeParameters.width;
        this.height = sizeParameters.height;
        this.lenght = sizeParameters.lenght;
    }
}

class Car{
    #name;
    #engine;
    #wheels;
    #body;
    #size;

    constructor(data) {
        this.#name = new Name(data.name);
        this.#engine = new Engine(data.engine);
        this.#wheels = new Wheels(data.wheels);
        this.#body = new Body(data.body);
        this.#size = new BodySize(data.size);
        this.myCar = this.saveCarData();
    } 
    
    saveCarData() {
        const carParameters = [this.#name, this.#engine, this.#wheels, this.#body, this.#size];
        const data = carParameters.reduce((accumulator, carParameter) => {

            return this.formatCarParameters(carParameter, accumulator);
        }, {});

        return data;
    }

    formatCarParameters(carParameter, result) {
        for(let [key, value] of Object.entries(carParameter)){
            result[`${key[0].toUpperCase()}${key.slice(1)} `] = value;
        }

        return result;
    }

}

module.exports = Car;
