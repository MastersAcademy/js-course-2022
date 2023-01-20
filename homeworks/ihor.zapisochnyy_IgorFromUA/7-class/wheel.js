class Wheel {
    constructor(radius, width) {
        this.setWheel(radius, width);
    }

    setWheel(radius, width) {
        const wheel = `${radius}, ${width}`;
        const wheelArray = [0, 0, 0, 0];
        this.wheelArray = wheelArray.fill(wheel, 0, 4);
    }
}

module.exports = Wheel;
