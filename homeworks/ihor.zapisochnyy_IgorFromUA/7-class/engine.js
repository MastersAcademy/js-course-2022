class Engine {
    constructor(volume, power) {
        this.volume = volume;
        this.power = power;
    }

    toString() {
        return (`
                 volume: ${this.volume} L
                 power:${this.power} hp`);
    }
}

module.exports = Engine;
