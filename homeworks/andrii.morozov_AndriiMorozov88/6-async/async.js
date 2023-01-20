console.clear();
const pokemon = {
    name: 'Pikachu',
    health: 10,
    happiness: 10,
    satiety: 10,
};
const pokemonProperties = Object.keys(pokemon);
const interval = 500;
let intervalCount = 0;
function play() {
    pokemon.health--;
    pokemon.happiness++;
    pokemon.satiety -= 1;
}
function food() {
    pokemon.health += 2;
    pokemon.happiness += 2;
    pokemon.satiety++;
}
function punish() {
    pokemon.health -= 4;
    pokemon.happiness--;
    pokemon.satiety -= 2;
}
function getRandom() {
    return Math.floor(Math.random() * 3);
}
function showPokemon() {
    console.clear();
    pokemonProperties.forEach((key) => console.log(`${key}: ${pokemon[key]}`));
}
showPokemon();
const changeStateInterval = setInterval(() => {
    let failedProperty;
    switch (getRandom()) {
        case 0:
            play();
            break;
        case 1:
            food();
            break;
        case 2:
            punish();
            break;
        default:
            break;
    }
    intervalCount++;
    showPokemon();
    if (pokemon.satiety < 1 || pokemon.happiness < 1 || pokemon.health < 1) {
        clearInterval(changeStateInterval);
        console.clear();
        pokemonProperties.forEach((key) => {
            if (pokemon[key] < 1 && typeof pokemon[key] === 'number') {
                failedProperty = key;
            }
        });
        console.log(`${failedProperty} is ended, ${pokemon.name} lived ${intervalCount * interval} ms`);
    }
}, interval);
