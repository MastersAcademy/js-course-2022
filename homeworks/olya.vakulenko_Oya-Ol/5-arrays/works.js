// // 3. Task With_Toys
const newChristmasTreeWithToys = (height = 15) => {
    let i = 0;
    let j = 0;
    while (i < height) {
        let gap = '';
        let star = '*';
        for (j = 0; j < height - i; j++) {
            gap += ' ';
        }
        for (j = 1; j < 2 * i; j++) {
            if (i === 1) {
                star += '*';
            } else {
                star += '*';
            }
        }
        gap += '@';
        star += '@';
        console.log(gap + star);
        i++;
    }
};

newChristmasTreeWithToys();
