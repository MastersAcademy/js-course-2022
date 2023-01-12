console.clear();
const pokemon = {
    name: 'Pikachu',
    health: 10,
    happiness: 10,
    satiety: 10,
};
const pokemonProperties = Object.keys(pokemon);
const interval = 1500;
let intervalCount = 0;
let randomFunction;
function play() {
    pokemon.health--;
    pokemon.happiness++;
    pokemon.satiety += 2;
}
function food() {
    pokemon.health += 2;
    pokemon.happiness++;
    pokemon.satiety++;
}
function punish() {
    pokemon.health -= 2;
    pokemon.happiness--;
    pokemon.satiety -= 2;
}
function getRandom() {
    return Math.floor(Math.random() * 3);
}
function showPokemon(random = 'Game Start') {
    console.clear();
    pokemonProperties.forEach((key) => console.log(`${key}: ${pokemon[key]}`));
    console.log(random);
}
showPokemon();
const changeStateInterval = setInterval(() => {
    switch (getRandom()) {
        case 0:
            play();
            randomFunction = 'PLAY';
            break;
        case 1:
            food();
            randomFunction = 'FOOD';
            break;
        case 2:
            punish();
            randomFunction = 'PUNISH';
            break;
        default:
            break;
    }
    intervalCount++;
    showPokemon(randomFunction);
    if (pokemon.satiety < 1 || pokemon.happiness < 1 || pokemon.health < 1) {
        clearInterval(changeStateInterval);
        console.clear();
        console.log(`Game Over, ${pokemon.name} lived ${intervalCount * interval} ms`);
    }
}, interval);
