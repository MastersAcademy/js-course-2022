console.log('=========== Task № 1 ===========');
function makeSpace(count) {
    let i = 0;
    let space = '';
    do {
        space += ' ';
        i++;
    } while (i < count);
    return space;
}
function makeStar(count) {
    let i = 0;
    let star = '';
    do {
        star += '*';
        i++;
    } while (i < count);
    return star;
}
function buildChristmasTree(height = 5) {
    const rowLength = height * 2;
    for (let i = 1; i <= height; i++) {
        const stars = i + (i - 1);
        const spaces = (rowLength - stars) / 2;
        console.log(makeSpace(spaces) + makeStar(stars));
    }
}
buildChristmasTree(7);

console.log('=========== Task № 2 ===========');
const arr = [
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
const arr1 = [];
arr.forEach((value) => {
    arr1.push(value.reduce((result, element) => {
        let symbol = element;
        if (symbol < 5) {
            symbol = ' ';
        } else if (symbol > 5) {
            symbol = '*';
        }
        return result + symbol;
    }, ''));
});
console.log(arr1);

console.log('=========== Task with star ===========');
function makeStarWithToy(count) {
    let i = 1;
    let starToy = '@';
    do {
        starToy += '*';
        i++;
    } while (i < (count - 1));
    starToy += '@';
    return starToy;
}
function buildChristmasTreeWithToy(height = 5) {
    const rowLength = height * 2;
    for (let i = 1; i <= height; i++) {
        const stars = i + (i - 1);
        const spaces = (rowLength - stars) / 2;
        if (i % 2 === 0) {
            console.log(makeSpace(spaces) + makeStarWithToy(stars));
        } else {
            console.log(makeSpace(spaces) + makeStar(stars));
        }
    }
}
buildChristmasTreeWithToy(8);
