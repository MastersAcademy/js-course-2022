const pet = document.querySelector('[data-pet]');
const main = document.querySelector('[data-main]');
const playButtonEl = document.querySelector('[data-play]');
const foodButtonEl = document.querySelector('[data-food]');
const template = {
    name: 'templatePet',
    health: 5,
    happiness: 5,
    satiety: 5,
};
const picachu = Object.create(template);
picachu.name = 'Picachu';
picachu.health = 10;
picachu.happiness = 10;
picachu.satiety = 10;
function showTemplate() {
    const keysArray = Object.keys(picachu);
    pet.innerHTML = '';
    keysArray.forEach((key) => {
        const objectField = document.createElement('p');
        pet.append(objectField);
        objectField.innerText = `${key} : ${picachu[key]}`;
    });
}
function changeFoodState() {
    picachu.happiness++;
    picachu.health++;
    picachu.satiety++;
    showTemplate();
}
function changePlayState() {
    picachu.happiness += 2;
    picachu.health++;
    picachu.satiety--;
    if (picachu.happiness * picachu.health * picachu.satiety) {
        showTemplate();
    } else {
        main.innerText = 'Game Over';
        playButtonEl.removeEventListener('click', changePlayState);
        foodButtonEl.removeEventListener('click', changeFoodState);
    }
}
showTemplate();
playButtonEl.addEventListener('click', changePlayState);
foodButtonEl.addEventListener('click', changeFoodState);
