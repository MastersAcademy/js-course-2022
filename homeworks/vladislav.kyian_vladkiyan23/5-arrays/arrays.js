// First task

function printChristmasTree(height) {    
    let oneSting = 0;
    while (oneSting < height) {
        let space = '';
        let star = '*';
        for (let i = 0; i < height - oneSting; i++) {
            space += ' ';
        }
        for (let j = 0; j < 2 * oneSting; j++) {
            star += '*';
        }
        console.log(space + star);
        oneSting++;
    }
}

printChristmasTree(6);

// Second task

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

const replaceArray = [];
let stringArray = [];

function replaceArrayItems() {
    array.forEach((item) => {
        replaceArray.push(item.map((value) => {
            return value < 5 ? ' ' : '*';
        }));
        stringArray = replaceArray.map(item => item.join(''));
    });
}

replaceArrayItems();

console.log(stringArray);
