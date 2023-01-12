function updateUser(height) {
    for (let i = 0; i < height; i++) {
        let snowflake = '*';
        const empty = ' ';
        const newYear = empty.repeat(height - i - 1);
        for (let a = 1; a <= i; a++) {
            snowflake += '**';
        }
        snowflake = newYear + snowflake;
        console.log(snowflake);
    }
}

updateUser(10);
