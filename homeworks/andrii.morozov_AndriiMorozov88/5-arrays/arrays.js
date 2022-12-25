const pineHeight = 10;
function showPineTree(height) {
    let starAmount = 1;
    const lowRowStarsAmount = height * 2 - 1;
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
showPineTree(pineHeight);

const numberArray = [
    [1, 4, 2, 4, 4, 2, 4, 3, 2, 6, 2, 4, 2, 4, 3, 1, 2, 4, 3],
    [1, 1, 3, 1, 1, 3, 3, 1, 6, 6, 8, 3, 3, 3, 3, 1, 4, 1, 2],
    [1, 2, 1, 4, 1, 1, 4, 7, 8, 8, 7, 7, 1, 1, 4, 3, 1, 1, 2],
    [3, 2, 3, 3, 4, 2, 7, 8, 6, 8, 6, 7, 8, 1, 2, 3, 3, 3, 4],
    [4, 1, 3, 3, 2, 8, 7, 8, 6, 7, 6, 7, 6, 7, 2, 4, 3, 2, 2],
    [3, 1, 2, 1, 7, 7, 8, 8, 8, 7, 6, 8, 8, 6, 8, 4, 1, 3, 2],
    [2, 1, 1, 7, 6, 7, 7, 8, 7, 6, 8, 6, 6, 6, 6, 8, 4, 4, 3],
    [4, 1, 6, 7, 8, 7, 8, 8, 6, 6, 6, 7, 6, 6, 6, 7, 6, 1, 2],
    [1, 6, 6, 6, 6, 8, 8, 7, 6, 6, 7, 8, 7, 8, 8, 7, 6, 7, 1],
    [8, 6, 8, 6, 6, 7, 7, 6, 6, 7, 8, 7, 6, 6, 6, 6, 7, 8, 7],
];
const reducedNumberArray = numberArray.reduce((sumArray, arrayEl) => sumArray.concat(arrayEl));
const stringArray = reducedNumberArray.map((element) => (element > 5 ? '*' : ''));
console.log(stringArray.join(' '));
