const tamagochi = {
  health: 5,
  enjoy: 5,
  food: 5,
  healIt() {
    this.health += 3;
    this.enjoy -= 1;
    this.food -= 1;
    console.log("Function name = healIt(). Tamagochi stats are:");
    console.log("health: "+this.health,";enjoy: "+this.enjoy,";food: "+ this.food);
  },
  playIt() {
    this.health -= 1;
    this.enjoy += 3;
    this.food -= 1;
    console.log("Function name = playIt(). Tamagochi stats are:");
    console.log("health: "+this.health,";enjoy: "+this.enjoy,";food: "+ this.food);
  },
  feedIt() {
    this.health -= 1;
    this.enjoy -= 1;
    this.food += 3;
    console.log("Function name = feedIt(). Tamagochi stats are:");
    console.log("health: "+this.health,";enjoy: "+this.enjoy,";food: "+ this.food);
  },
   getRandomAction() {
    let randomInt = Math.floor(Math.random() * 3);
    switch (randomInt) {
      case 0:
          return this.playIt();
      case 1:
          return this.feedIt();
      case 2:
          return this.healIt();
      default:
          return null;
  }
  },
  startGame(){
    let timeTamagochiAlive = 0;
    const playInterval = setInterval(() => {
      this.getRandomAction();
      if ( this.health  === 0) {
        clearInterval(playInterval);
    }
      if ( this.enjoy  === 0) {
      clearInterval(playInterval);
    }
      if ( this.food  === 0) {
      clearInterval(playInterval);
    }
    timeTamagochiAlive += 0.5;
     console.log("Time tamagochi is alive = " +timeTamagochiAlive+" sec")
  },500)}
};
tamagochi.startGame();
