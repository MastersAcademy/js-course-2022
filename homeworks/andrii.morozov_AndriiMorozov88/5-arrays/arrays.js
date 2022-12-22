const lowRowAmount = 10;
const pineArray = new Array(lowRowAmount);
pineArray.fill('*');
function getPineForm(starsAmount) {
    const upRowAmount = starsAmount % 2 === 1 ? 1 : 2;
    return upRowAmount;
}
console.log(getPineForm(lowRowAmount));
