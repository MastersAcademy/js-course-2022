const createChritsmasTree = (height) => {
    let starsTree;
    for (let i = 1; i <= height; i++) {
        starsTree = '';
        if (i % 2 !== 0) {
            for (let index = i; index < height + i / 2; index++) {
                starsTree += ' ';
            }
            for (let idx = 0; idx < i; idx++) {
                starsTree += '*';
            }
            console.log(starsTree);
        }
    }
};

createChritsmasTree(20);
