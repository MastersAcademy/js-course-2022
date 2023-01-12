//  task #1
function christmasTree(height, toySimbol, bodySimbol = '*', onEach = 2) {
    function makeString(length, simb) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += simb;
        }
        return result;
    }
    function hangToy(string) {
        return toySimbol + string.slice(2) + toySimbol;
    }
    let result = '';
    for (let i = 1; i <= height; i++) {
        result += makeString(height - i, ' ');
        let body = makeString(2 * i - 1, bodySimbol);
        if (toySimbol !== undefined) {
            if (i % onEach === 0 && i > 1) {
                body = hangToy(body);
            }
        }
        result += body;
        result += '\n';
    }
    return result;
}
console.log(christmasTree(5));
console.log(christmasTree(7, '*', '0'));
console.log(christmasTree(7, '@'));
console.log(christmasTree(7, '*', '0', 1));

//  task #2

const originArray = [
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

function processArr(arr) {
    function replace(item) {
        return (item < 5) ? ' ' : '*';
    }
    return arr.reduce((res, item) => {
        res.push(item.map(replace).join(''));
        return res;
    }, []);
}

console.log(processArr(originArray));
