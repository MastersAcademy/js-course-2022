function writeRightSide(count) {
    let str = '';
    for (let i = 0; i < count; i++) {
        str += '*';
    }
    return str;
}
function writeLeftSide(count) {
    let str = '';
    for (let i = 0; i <= count; i++) {
        str += '*';
    }
    const spaceCount = height - count;
    for (let j = 0; j <= spaceCount; j++) {
        str = ' ' + `${str}`;
    }
    return str;
}
const height = 15;
for (let line = 0; line <= height; line++) {
    let str = ' ';
    str = writeLeftSide(line);
    str += writeRightSide(line);
    console.log(str);
}
// task2
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
const newArr = arr.map((str) => {
const newStr =  str.map((value) => {
    if (value > 5 ) {
        return '*';
    } else {
        return ' ';
    }
})
return newStr.join('')
});
console.log(newArr.join(','));
