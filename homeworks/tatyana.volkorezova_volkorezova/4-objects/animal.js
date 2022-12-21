const animal = {
    name: 'General',
    age: 0,
    type: 'Egg',
    color: 'white',
};

const firstAnimal = Object.create(animal);
firstAnimal.name = 'Chiha';
firstAnimal.age = 2;
firstAnimal.type = 'Dragon';
firstAnimal.favoriteFood = 'fish';
firstAnimal.momName = 'Tanya';

const secondAnimal = Object.create(animal);
secondAnimal.name = 'Aro';
secondAnimal.age = 9;
secondAnimal.type = 'Rubbit';
secondAnimal.favoriteFood = 'apple';
secondAnimal.momName = 'Asya';
secondAnimal.dadName = 'Ihor';

console.log(firstAnimal);
console.log(secondAnimal);
