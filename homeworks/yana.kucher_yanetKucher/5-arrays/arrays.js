const defaultArray = [
    [1, 4, 2, 4, 4, 2, 4, 3, 2, 6, 2, 4, 2, 4, 3, 1, 2, 4, 3],
    [1, 1, 3, 1, 1, 3, 3, 1, 6, 6, 8, 3, 3, 3, 3, 1, 4, 1, 2],
    [1, 2, 1, 4, 1, 1, 4, 7, 8, 8, 7, 7, 1, 1, 4, 3, 1, 1, 2],
    [3, 2, 3, 3, 4, 2, 7, 8, 6, 8, 6, 7, 8, 1, 2, 3, 3, 3, 4],
    [4, 1, 3, 3, 2, 8, 7, 8, 6, 7, 6, 7, 6, 7, 2, 4, 3, 2, 2],
    [3, 1, 2, 1, 7, 7, 8, 8, 8, 7, 6, 8, 8, 6, 8, 4, 1, 3, 2],
    [2, 1, 1, 7, 6, 7, 7, 8, 7, 6, 8, 6, 6, 6, 6, 8, 4, 4, 3],
    [4, 1, 6, 7, 8, 7, 8, 8, 6, 6, 7, 7, 6, 6, 6, 7, 6, 1, 2],
    [1, 6, 6, 6, 6, 8, 8, 7, 6, 6, 7, 8, 7, 8, 8, 7, 6, 7, 1],
    [8, 6, 8, 6, 6, 7, 7, 6, 6, 7, 8, 7, 6, 6, 6, 6, 7, 8, 7],
];

function showChristmasTree(height) {
    const emptyItem = ' ';
    const starItem = '*';

    for (let i = 0; i < height; i++) {
        let christmasTree = '';

        for (let j = height; j > i - 1; j--) {
            christmasTree += emptyItem;
        }
        for (let k = 0; k < i * 2 + 1; k++) {
            christmasTree += starItem;
        }
        console.log(christmasTree);
    }
}

showChristmasTree(7);

function convertArrayIntoTree(passedArray) {
    const emptyItem = ' ';
    const starItem = '*';
    const maxNumber = 5;

    const christmasTree = passedArray.map((iterationArray) => iterationArray.map((item) => {
        if (item > maxNumber) {
            return starItem;
        }
        return emptyItem;
    }).join(''));
    console.log(christmasTree);
}

convertArrayIntoTree(defaultArray);
