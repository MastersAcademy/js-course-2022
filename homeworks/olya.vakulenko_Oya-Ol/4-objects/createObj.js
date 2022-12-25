const petsHouse = {
    pets: ['World of Pets'],
    getPets() {
        return this.pets;
    },
    addNewPet(namePet) {
        this.pets.push(namePet);
    },
    removePet(namePet) {
        const petIndex = this.pets.indexOf(namePet);
        this.pets.splice(petIndex, 1);
    },

};

const pet = {
    name: 'newName',
    age: 0,
    type: 'newType',
    color: 'newColor',
    colorEyes: 'newColorEyes',
};

const newPet = Object.create(pet);

newPet.name = 'Bulbazaur';
newPet.age = 1;
newPet.favoriteFood = 'cookie';
newPet.favoriteDrink = 'milk';

console.log(petsHouse.getPets());
petsHouse.addNewPet('Bulbazaur');
petsHouse.addNewPet('Pikachu');
console.log(petsHouse.getPets());
petsHouse.removePet('Pikachu');
console.log(petsHouse.getPets());
