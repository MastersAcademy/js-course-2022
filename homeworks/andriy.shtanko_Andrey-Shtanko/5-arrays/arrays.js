const printChritsmasTree = (height) => {
    let raw;
    for (let i = 1; i <= height; i++) {
        raw = '';
        if (i % 2 !== 0) {
            for (let index = i; index < height + i / 2; index++) {
                raw += ' ';
            }
            for (let idx = 0; idx < i; idx++) {
                raw += '*';
            }
            console.log(raw);
        }
    }
};

printChritsmasTree(20);

const bigArray = [
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

const christmasArray = bigArray.reduce((acc, array) => {
    const raw = array.reduce((accum, number) => {
        accum.push(number < 5 ? ' ' : '*');
        return accum;
    }, []).join('');
    return [...acc, raw];
}, []);

console.log(christmasArray);
