// 3. Task With_Toys
const printChristmasTreeWithToys = (height = 15) => {
    let y = 0;
    let x = 0;
    while (y < height) {
        let gap = '';
        let star = '*';
        for (x = 0; x < height - y + (y % 2); x++) {
            gap += ' ';
        }
        for (x = 0; x < 2 * y - (y % 2) * 2; x++) {
            star += '*';
        }
        if (y % 2 !== 0) {
            gap += '@';
            star += '@';
        } else {
            gap += ' ';
        }
        console.log(gap + star);
        y++;
    }
};

printChristmasTreeWithToys();
