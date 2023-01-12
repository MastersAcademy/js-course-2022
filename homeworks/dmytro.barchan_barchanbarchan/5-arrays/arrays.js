const tree = (height) => {
    let i = 0;
    let j = 0;
    while (i < height) {
        let space = '';
        let star = '';
        for (j = 0; j < height - i; j++) space += ' ';
        for (j = 0; j < 2 * i + 1; j++) star += '*';
        console.log(space + star);
        i++;
    }
};

tree(5);
