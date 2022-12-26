// 3. Task With_Toys
const newChristmasTreeWithToys = (height = 15) => {
    let i = 0;
    let j = 0;
    while (i < height) {
        let gap = '';
        let star = '*';
        for (j = 0; j < height - i + !!(i % 2); j++) {
            gap += ' ';
        }
        for (j = 0; j < 2 * i - !!(i % 2) * 2; j++) {
            star += '*';
        }
        if (i % 2 !== 0) {
            gap += '@';
            star += '@';
        } else {
            gap += ' ';
        }
        console.log(gap + star);
        i++;
    }
};

newChristmasTreeWithToys();
