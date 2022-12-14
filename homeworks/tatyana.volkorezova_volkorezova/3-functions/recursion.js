const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getExponention(number, stepin) {
    if (stepin === 1) {
        return number;
    }
    return number * getExponention(number, stepin - 1);
}

readline.question('Please enter the number for pow function: ', (firstInput) => {
    readline.question('Please enter the stepin: ', (secondInput) => {
        const firstNumReadLine = Number(firstInput);
        const secondNumReadLine = Number(secondInput);
        const result = getExponention(firstNumReadLine, secondNumReadLine);
        console.log(`\nThe result of getting exponention via recursion: ${result}`);
        readline.close();
    });
});
