const lowRowStarsAmount = 4;
const pineArray = new Array(lowRowStarsAmount);
pineArray.fill('*');
function getUpRowStarsAmount(starsAmount) {
    const upRowAmount = starsAmount % 2 === 1 ? 1 : 2;
    return upRowAmount;
}
function getPineHeight(starsAmount) {
    const pineHeight = Math.round(starsAmount / 2);
    return pineHeight;
}
console.log(getUpRowStarsAmount(lowRowStarsAmount));
console.log(getPineHeight(lowRowStarsAmount));
