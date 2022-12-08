const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function powRecursion(number, stepin) {
    return (stepin === 1) ? number : number * powRecursion(number, stepin - 1);
}

readline.question('Please enter the number for pow function: ', (firstInput) => {
    readline.question('Please enter the stepin: ', (secondInput) => {
        const firstNumReadLine = Number(firstInput);
        const secondNumReadLine = Number(secondInput);

        // call powRecursion function
        const result = powRecursion(firstNumReadLine, secondNumReadLine);

        console.log(`\nThe result of pow function via recursion: ${result}`);
        readline.close();
    });
});
