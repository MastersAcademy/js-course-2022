// Task 1
function newYearTree(length) {
    for (let i = 0; i < length; i++) {
        let star = '*';
        const space = ' ';
        const spaces = space.repeat(length - i - 1);
        for (let k = 1; k <= i; k++) {
            star += '**';
        }
        star = spaces + star;
        console.log(star);
    }
}

newYearTree(15);
