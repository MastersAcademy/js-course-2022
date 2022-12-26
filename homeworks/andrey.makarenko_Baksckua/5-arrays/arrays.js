function height(tree) {
    for (let i = 0; i < tree; i++) {
        let snowflake = '*';
        const empty = ' ';
        const newYear = empty.repeat(tree - i - 1);
        for (let a = 1; a <= i; a++) {
            snowflake += '**';
        }
        snowflake = newYear + snowflake;
        console.log(snowflake);
    }
}

height(10);
