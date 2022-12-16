const pet = document.querySelector('[data-pet]');
const inputContainer = document.querySelector('[data-input-container]');
const playButtonEl = document.querySelector('[data-play]');
const foodButtonEl = document.querySelector('[data-food]');
const createPetButtonEl = document.querySelector('[data-create-pet]');
const inputPetName = document.querySelector('[data-input-pet-name]');
const inputHealth = document.querySelector('[data-input-health]');
const inputHappiness = document.querySelector('[data-input-happiness]');
const inputSatiety = document.querySelector('[data-input-satiety]');
const submitButtonEl = document.querySelector('[data-submit]');
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
    if (template.happiness * template.health * template.satiety) {
        showTemplate();
    } else {
        showTemplate();
        playButtonEl.removeEventListener('click', changePlayState);
        foodButtonEl.removeEventListener('click', changeFoodState);
    }
}
function createPet() {
    inputContainer.classList.toggle('hidden');
    createPetButtonEl.classList.toggle('disabled');
    const newObject = Object.create(template);
    petArray.push(newObject);
    submitButtonEl.addEventListener('click', () => {
        if (inputPetName.value.length) {
            newObject.name = inputPetName.value;
            newObject.health = Number(inputHealth.value);
            newObject.happiness = Number(inputHappiness.value);
            newObject.satiety = Number(inputSatiety.value);
            showCreatedPets();
            inputContainer.reset();
            inputContainer.classList.toggle('hidden');
            createPetButtonEl.classList.toggle('disabled');
        }
    });
}
showTemplate();
playButtonEl.addEventListener('click', changePlayState);
foodButtonEl.addEventListener('click', changeFoodState);
createPetButtonEl.addEventListener('click', createPet);
