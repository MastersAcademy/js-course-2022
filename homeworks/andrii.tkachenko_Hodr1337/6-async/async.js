const tamagochi = {
  health: 5,
  enjoy: 5,
  food: 5,
};

function healIt() {
  tamagochi.health += 3;
  tamagochi.enjoy -= 1;
  tamagochi.food -= 1;
  console.log("Function name = healIt(). Tamagochi stats are:");
  console.log(tamagochi);
}

function playIt() {
  tamagochi.health -= 1;
  tamagochi.enjoy += 3;
  tamagochi.food -= 1;
  console.log("Function name = playIt(). Tamagochi stats are:");
  console.log(tamagochi);
}

function feedIt() {
  tamagochi.health -= 1;
  tamagochi.enjoy -= 1;
  tamagochi.food += 3;
  console.log("Function name = feedIt(). Tamagochi stats are:");
  console.log(tamagochi);
}
const arrFunc = [feedIt, playIt, healIt];
let timeTamagochiAlive = 0;

const randFunc = setInterval(() => {
  arrFunc[Math.floor(Math.random() * arrFunc.length)]();
  if ( tamagochi.health  === 0) {
    clearInterval(randFunc);
}
  if ( tamagochi.enjoy  === 0) {
  clearInterval(randFunc);
}
  if ( tamagochi.food  === 0) {
  clearInterval(randFunc);
}
timeTamagochiAlive += 0.5;
 console.log("Time tamagochi is alive = " +timeTamagochiAlive+" sec")
},500);
