let i = 0;
let x = 0;

let empty = '';
let star = '';

const christmasTree = (height) => {
    while (i < height) {
        empty = '';
        star = '';
        for (x = 0; x < height - i; x++) {
            empty += ' ';
        }
        for (x = 0; x < 2 * i + 1; x++) {
            star += '*';
        }
        console.log(empty + star);
        i++;
    }
};

christmasTree(10);
