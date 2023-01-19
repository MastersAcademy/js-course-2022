class Car {
    constructor(engine, wheels, type, size, weight, engineVolume, enginePower,
        wheelsRadius, wheelsWidth, sizeHeight, sizeWidth, sizeLength) {
        this.car = {
            engine,
            wheels,
            type,
            size,
            weight,
        };
        this.engine = {
            volume: engineVolume,
            power: enginePower,
        };
        this.wheels = {
            radius: wheelsRadius,
            width: wheelsWidth,
        };
        this.size = {
            height: sizeHeight,
            width: sizeWidth,
            length: sizeLength,
        };
    }
}
const myCar = new Car('gasoline', '4 wheels', 'Sedan', 'Mid-size car', '2000 kg', '4.0L', '450hp', '18inch', '8inch', '180cm', '200cm', '300cm');
console.log(myCar);
