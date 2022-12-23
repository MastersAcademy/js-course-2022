// first task
const ChristmasTree = (height) => {
    if (height >= 0 && height <= 20) {
        const star = '*';
        const space = ' ';
        let lineToy = false;
        let toy = null;

        for (let i = 0; i <= height; i++) {
            const background = space.repeat(height - i);
            let tree = star.repeat(i);

            if (lineToy === false) {
                toy = '';
                lineToy = true;
            } else {
                tree = star.repeat(i - 1);
                toy = '@';
                lineToy = false;
            }

            const result = background + toy + tree + star + tree + toy;
            console.log(result);
        }
    }
};
ChristmasTree(15);
// second task
const array = [
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

const modifyArray = (el) => (
    el.map(
        (item) => item.reduce(
            (accumulator, currentValue) => {
                const itemValue = (currentValue > 5) ? '*' : ' ';
                return accumulator + itemValue;
            }, '',
        ),
    )
);

console.log(modifyArray(array));
