/// Створити ялинку заданої висоти
function renderTree(height) {
    for (let i = 0, h = height; i < height; i++) {
        console.log(`${' '.repeat(h--)}${'*'.repeat(2 * i + 1)}`);
    }
}

renderTree(10);

/// Перетворити вхідний масив

const inputArray = [
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

function replaceWith(number) {
    return number > 5 ? '*' : ' ';
}

const outputArray = inputArray.map((subArray) => subArray.map((number) => replaceWith(number)).join(''));

console.log(outputArray);

/// Завдання з зірочкою

function renderDecoratedTree(height) {
    for (let i = 0, h = height; i < height; i++) {
        if (i % 2) {
            console.log(`${' '.repeat(h--)}@${'*'.repeat(2 * i - 1)}@`);
        } else {
            console.log(`${' '.repeat(h--)}${'*'.repeat(2 * i + 1)}`);
        }
    }
}

renderDecoratedTree(10);
