function showChristmasTree(height) {
    let christmasTree = '';
    let numberOfSpaces = height;

    for (let i = 0; i < height; i++) {
        if (numberOfSpaces === height) {
            numberOfSpaces -= 1;
            christmasTree = christmasTree.padStart(numberOfSpaces, ' ');
            christmasTree += '*';
        } else {
            numberOfSpaces -= 1;
            christmasTree = christmasTree.slice(1);
            christmasTree += '**';
        }
        console.log(christmasTree);
    }
}

showChristmasTree(10);

const twoDimensionalArray = [
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

const changedArray = twoDimensionalArray.map((element) => element.map((currentNumber) => {
    let itemValue = '';
    if (currentNumber > 5) {
        itemValue += '*';
    } else if (currentNumber < 5) {
        itemValue += ' ';
    }
    return itemValue;
}));

const resultArray = [];

changedArray.forEach((item) => {
    resultArray.push(item.join(''));
});

console.log(resultArray);
