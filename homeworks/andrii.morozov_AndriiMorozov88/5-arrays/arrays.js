const lowRowStarsAmount = 10;
let upRowAmount = lowRowStarsAmount % 2 === 1 ? 1 : 2;
const pineHeight = Math.round(lowRowStarsAmount / 2);
for (let count = 0; count < pineHeight; count++) {
    let dashAmount = lowRowStarsAmount - upRowAmount;
    const starsArray = new Array(upRowAmount);
    const dashArray = new Array(dashAmount / 2);
    starsArray.fill('*');
    dashArray.fill('-');
    const pineArray = dashArray.concat(starsArray, dashArray);
    upRowAmount += 2;
    dashAmount -= 2;
    console.log(pineArray.join(''));
}
