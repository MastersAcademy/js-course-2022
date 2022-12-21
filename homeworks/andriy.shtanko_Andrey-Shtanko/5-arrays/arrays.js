const createChritsmasTree = (height) => {
    let starsTree;
    for (let i = 1; i <= height; i++) {
        starsTree = '';
        if (i % 2 !== 0) {
            for (let index = i; index < height + i / 2; index++) {
                starsTree += ' ';
            }
            for (let idx = 0; idx < i; idx++) {
                starsTree += '*';
            }
            console.log(starsTree);
        }
    }
};

createChritsmasTree(20);

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
const result = bigArray.reduce((acc, array) => {
    const string = array.reduce((accum, number) => {
        if (number < 5) {
            accum.push(' ');
        } else {
            accum.push('*');
        }
        return accum;
    }, []).join('');
    acc.push(string);
    return acc;
}, []);

console.log(result);
