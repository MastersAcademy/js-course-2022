function height(tree) {
    for (let i = 0; i < tree; i++) {
        let star = '*';
        let space = ' ';
        const spaces = space.repeat(tree - i - 1);
        for (let a = 1; a <= i; a++) {
            star += '**';
        }
        star = spaces + star;
        console.log(star);
    }
}

height(10);
