const height = 15;
for (let line = 0; line <= height; line++) {
    let str = ' ';
    str = writeLeftSide(line);
    str += writeRightSide(line);
    console.log(str);
}
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
    let spaceCount = height - count;
    for (let j = 0; j <= spaceCount; j++) {
        str = ' ' + str;
    }
    return str;
}
