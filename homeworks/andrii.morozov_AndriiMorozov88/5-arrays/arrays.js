const lowRowStarsAmount = 75;
function pine(height) {
    let starAmount = height % 2 === 1 ? 1 : 2;
    const pineHeight = Math.round(height / 2);
    for (let count = 0; count < pineHeight; count++) {
        let dashAmount = lowRowStarsAmount - starAmount;
        const starsArray = new Array(starAmount);
        const dashArray = new Array(dashAmount / 2);
        starsArray.fill('*');
        dashArray.fill('-');
        if (count % 2 === 1) {
            starsArray[0] = '@';
            starsArray[starsArray.length - 1] = '@';
        }
        const pineArray = dashArray.concat(starsArray, dashArray);
        starAmount += 2;
        dashAmount -= 2;
        console.log(pineArray.join(''));
    }
}
pine(lowRowStarsAmount);
