class Wheel {
    constructor(radius, width) {
        this.setWheel(radius, width);
    }

    setWheel(radius, width) {
        const wheel = `${radius} ${width}`;
        this.wheelArray = [wheel, wheel, wheel, wheel];
    }

    toString() {
        return `allWheel(inches mm): ${this.wheelArray}`;
    }
}

module.exports = Wheel;
