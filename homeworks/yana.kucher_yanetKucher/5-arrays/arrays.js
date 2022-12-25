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
