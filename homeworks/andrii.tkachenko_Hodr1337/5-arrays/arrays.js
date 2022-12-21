function elka(height) {
    let x = 0;
    let y = 0;
    let space; let asterics;

    while (x < height) {
        space = '';
        asterics = '';
        for (y = 0; y < height - x; y++) space += ' ';
        for (y = 0; y < 2 * x + 1; y++) asterics += '*';
        console.log(space + asterics);
        x++;
    }
}
elka(5);
