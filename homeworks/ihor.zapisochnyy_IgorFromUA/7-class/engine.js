class Engine {
    constructor(volume, power) {
        this.setVolume(volume);
        this.setPower(power);
    }

    setVolume(volume) {
        this.volume = volume;
    }

    setPower(power) {
        this.power = power;
    }
}

module.exports = Engine;
