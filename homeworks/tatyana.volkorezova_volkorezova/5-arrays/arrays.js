const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function displayChristmasTreeWithoutToys(height) {
    let spaceItem = '';
    let starItem = '';
    let i = 0;

    while (i < height) {
        spaceItem = '';
        starItem = '';

        for (let j = 0; j < height - i; j++) {
            spaceItem += ' ';
        }
        for (let j = 0; j < i * 2 + 1; j++) {
            starItem += '*';
        }
        console.log(spaceItem + starItem);
        i++;
    }
}

function displayChristmasTreeWithToys(height) {
    let rowWithToys = 1;
    let separateRowOfTree = '';
    const arrayWithTree = [];

    for (let i = 0; i < height; i++) {
        for (let q = 0; q < height - i - 1; q++) {
            separateRowOfTree += ' ';
        }
        if ((i + 2) % 2 !== 0) {
            separateRowOfTree += '@';
            for (let y = 0; y < rowWithToys - 2; y++) {
                separateRowOfTree += '*';
            }
            separateRowOfTree += '@';
        } else {
            for (let y = 0; y < rowWithToys; y++) {
                separateRowOfTree += '*';
            }
        }
        rowWithToys += 2;
        arrayWithTree.push(separateRowOfTree);
        separateRowOfTree = '';
    }
    console.log(arrayWithTree.join('\n'));
}

function displayChristmasTreeWithToysDesignTree(height) {
    let i = 0;
    let spaceItem = '';
    let starItem = '';

    while (i < height) {
        spaceItem = '';
        starItem = '';

        for (let j = 0; j < height - i; j++) {
            spaceItem += ' ';
        }
        for (let q = 0; q < i * 2 + 1; q++) {
            if ((q + 1) % 2 === 0) {
                starItem += '@';
            } else {
                starItem += '*';
            }
        }
        console.log('\x1b[32m', spaceItem + starItem);
        i++;
    }
}

function additionalTreeWithOutStarOnCenter(height) {
    let i = 0;
    let spaceItem = '';
    let starItem = '';

    while (i < height) {
        spaceItem = '';
        starItem = '';

        for (let j = 0; j < height - i; j++) {
            spaceItem += ' ';
        }
        for (let q = 1; q < i * 2 + 1; q++) {
            if (q === 1) {
                starItem += '@';
            } else {
                starItem += '*';
            }
        }
        starItem += '@';
        console.log(spaceItem + starItem);
        i++;
    }
}

readline.question('Please enter the height of future Christmas tree: ', (treeHeight) => {
    const heightReadLine = Number(treeHeight);

    console.log('\nEnjoy your Christmas tree WITHOUT toys');
    displayChristmasTreeWithoutToys(heightReadLine);
    console.log('\nEnjoy your Christmas tree WITH toys');
    displayChristmasTreeWithToys(heightReadLine);
    console.log('\nEnjoy your Christmas tree WITH toys (tree with design)');
    displayChristmasTreeWithToysDesignTree(heightReadLine);
    console.log('\nEnjoy special additional Christmas tree WITHOUT STAR IN THE CENTER');
    additionalTreeWithOutStarOnCenter(heightReadLine);
    readline.close();
});
