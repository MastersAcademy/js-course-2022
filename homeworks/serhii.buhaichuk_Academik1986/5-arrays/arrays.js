const makeChristmasTree = (height) => {
    let row = 0;
    let position = 0;
    while (row < height) {
        let empty = '';
        let star = '';
        for (position = 0; position < height - row; position++) {
            empty += ' ';
        }
        for (position = 0; position < 2 * row + 1; position++) {
            star += '*';
        }
        console.log(empty + star);
        row++;
    }
};

makeChristmasTree(10);
