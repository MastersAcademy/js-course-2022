class Car {
    constructor() {
        this.car = {
            engine: '',
            wheels: '',
            type: '',
            size: '',
            weight: '',
        };
        this.engine = {
            volume: '',
            power: '',
        };
        this.wheels = {
            radius: '',
            width: '',
        };
        this.size = {
            height: '',
            width: '',
            length: '',
        };
    }
}
const myCar = new Car();
myCar.car = {
    engine: 'gasoline', wheels: '4 wheels', type: 'Sedan', size: 'Mid-size car', weight: '2000 kg',
};
myCar.engine = {
    volume: '4.0L', power: '450hp',
};
myCar.wheels = {
    radius: '18inch', width: '8inch',
};
myCar.size = {
    height: '180cm', width: '200cm', length: '300cm',
};
console.log(myCar);
