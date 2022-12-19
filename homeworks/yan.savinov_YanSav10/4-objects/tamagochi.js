const tamagochi = {
    name: 'Gochi',
    age: 0,
    color: 'black',
};

const firstTamagochi = Object.create(tamagochi);
firstTamagochi.name = 'Kiki';
firstTamagochi.age = 6;
firstTamagochi.favoriteFood = 'meat';
firstTamagochi.color = 'red';

const secondTamagochi = Object.create(tamagochi);
secondTamagochi.name = 'Lolo';
secondTamagochi.age = 3;
secondTamagochi.favoriteFood = 'fish';
secondTamagochi.color = 'blue';

console.log(firstTamagochi);
console.log(secondTamagochi);
