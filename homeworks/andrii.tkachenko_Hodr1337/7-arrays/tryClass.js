class Car {
    constructor (engine,wheelArray,bodyStyle,dimensions,weight){
      this.engine = engine;
      this.wheelArray = wheelArray;
      this.bodyStyle = bodyStyle;
      this.dimensions = dimensions;
      this.weight = weight}
  };

  class Engine{
    constructor (volume,power){
      this.volume = volume;
      this.power = power;
  }
  }

  let V8 = new Engine (4, "650 horsepower");

  class Dimensions{
    constructor (heigh, width , length ){
      this.heigh = heigh;
      this.width = width;
      this.length = length
  }
  }

  let typicalSUV = new Dimensions ("1638mm","2016mm","5112mm");

  class Wheel{
    constructor (radius,width){
      this.radius = radius;
      this.width = width;
  }
  }

  let wheel1 = new Wheel (9.5, 23);
  let wheel2 = new Wheel (9.5, 23);
  let wheel3 = new Wheel (9.5, 23);
  let wheel4 = new Wheel (9.5, 23);
  let wheelsArray = {wheel1,wheel2,wheel3,wheel4}


  let lamborghiniUrus = new Car(V8,wheelsArray,"SUV",typicalSUV,"2200kg");
  console.log(lamborghiniUrus);
