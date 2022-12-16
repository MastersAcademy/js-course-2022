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

console.log(firstTamagochi);
