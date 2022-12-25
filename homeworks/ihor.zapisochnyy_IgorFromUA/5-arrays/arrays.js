const buildingTree = function (height) {
    let branch = '';
    let needles = 1;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < height - i - 1; j++) {
            branch += ' ';
        }
        for (let c = 0; c < needles; c++) {
            branch += '*';
        }
        needles += 2;
        console.log(branch);
        branch = '';
    }
};

const buildingChristmasTree = function (height) {
    let branch = '';
    let needles = 1;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < height - i - 1; j++) {
            branch += ' ';
        }
        if ((i + 2) % 2 !== 0) {
            branch += '@';
            for (let c = 0; c < needles - 2; c++) {
                branch += '*';
            }
            branch += '@';
        } else {
            for (let c = 0; c < needles; c++) {
                branch += '*';
            }
        }
        needles += 2;
        console.log(branch);
        branch = '';
    }
};

buildingTree(7);
buildingChristmasTree(7);

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
const myArray = array.map((element) => element.map((el) => (el > 5 ? '*' : ' ')).join(''));

console.log(myArray);
