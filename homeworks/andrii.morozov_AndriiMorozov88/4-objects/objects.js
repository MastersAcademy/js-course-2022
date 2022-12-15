const pet = document.querySelector('[data-pet]');
const inputContainer = document.querySelector('[data-input-container]');
const playButton = document.querySelector('[data-play]');
const foodButton = document.querySelector('[data-food]');
const createPetButton = document.querySelector('[data-create-pet]');
const inputPetName = document.querySelector('[data-input-pet-name]');
const inputHealth = document.querySelector('[data-input-health]');
const inputHappiness = document.querySelector('[data-input-happiness]');
const inputSatiety = document.querySelector('[data-input-satiety]');
const submitButton = document.querySelector('[data-submit]');
const createdPets = document.querySelector('[data-created-pets]');
const petArray = [];
let template = {
    name: 'templatePet',
    health: 5,
    happiness: 5,
    satiety: 5,
};
petArray.push(template);
function showTemplate() {
    const keysArray = Object.keys(template);
    pet.innerHTML = '';
    keysArray.forEach((key) => {
        const objectField = document.createElement('p');
        pet.append(objectField);
        objectField.innerText = `${key} : ${template[key]}`;
    });
}
function showCreatedPets() {
    createdPets.innerText = '';
    petArray.forEach((element) => {
        const createdPet = document.createElement('button');
        createdPets.append(createdPet);
        createdPet.classList.add('created-pets');
        createdPet.innerText = element.name;
        createdPet.addEventListener('click', () => {
            template = element;
            showTemplate();
        });
    });
}
showCreatedPets();
function changeFoodState() {
    template.happiness++;
    template.health++;
    template.satiety++;
    showTemplate();
}
function changePlayState() {
    template.happiness += 2;
    template.health++;
    template.satiety--;
    if ((template.happiness * template.health * template.satiety) > 0) {
        showTemplate();
    } else {
        showTemplate();
        playButton.removeEventListener('click', changePlayState);
        foodButton.removeEventListener('click', changeFoodState);
    }
}
function createPet() {
    inputContainer.classList.toggle('hidden');
    createPetButton.classList.toggle('disabled');
    const newObject = Object.create(template);
    petArray.push(newObject);
    submitButton.addEventListener('click', () => {
        if (inputPetName.value.length !== 0) {
            newObject.name = inputPetName.value;
            newObject.health = Number(inputHealth.value);
            newObject.happiness = Number(inputHappiness.value);
            newObject.satiety = Number(inputSatiety.value);
            showCreatedPets();
            inputContainer.reset();
            inputContainer.classList.toggle('hidden');
            createPetButton.classList.toggle('disabled');
        }
    });
}
showTemplate();
playButton.addEventListener('click', changePlayState);
foodButton.addEventListener('click', changeFoodState);
createPetButton.addEventListener('click', createPet);
