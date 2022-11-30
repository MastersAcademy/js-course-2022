const firstNumber = 20;
const secondNumber = 22;
const operationMult = `*`;
const resultMult = 20 * 22;
const operationDivis = `/`;
const resultDivis = 20 / 22;
const operationAddit = `+`;
const resultAddit = 20 + 22;
const operationSubtract = `-`;
const resultSubtract = 20 - 22;

// If/else statement
console.log(`If/else statement!!!`);
// Multiplication
 if (operationMult === `*`){
    console.log(`${firstNumber} ${operationMult} ${secondNumber} = ${resultMult}`);
} else{
    console.log(`Error...`);
}

// Division
 if (operationDivis === `/`){
    console.log(`${firstNumber} ${operationDivis} ${secondNumber} = ${resultDivis}`);
} else{
    console.log(`Error...`);
}

// Addition
 if (operationAddit === `+`){
    console.log(`${firstNumber} ${operationAddit} ${secondNumber} = ${resultAddit}`);
} else{
    console.log(`Error...`);
}

// Substraction
 if (operationSubtract === `-`){
    console.log(`${firstNumber} ${operationSubtract} ${secondNumber} = ${resultSubtract}`);
} else{
    console.log(`Error...`);
}

// Switch statement
const valueOperation = prompt(`Вкажіть оператор який ви би хотіли використувати... Доступні( "*" "/" "+" "-" )`);

console.log(`Switch statement!!!`);
switch (valueOperation){
    case ` * `:
        console.log(`${firstNumber} ${operationMult} ${secondNumber} = ${resultMult}`);
    break;
    case ` / `:
        console.log(`${firstNumber} ${operationDivis} ${secondNumber} = ${resultDivis}`);
    break;
    case ` + `:
        console.log(`${firstNumber} ${operationAddit} ${secondNumber} = ${resultAddit}`);
    break;
    case ` - `:
        console.log(`${firstNumber} ${operationSubtract} ${secondNumber} = ${resultSubtract}`);
    break;
    default:
        console.log(`На жаль, такого не існує, введіть з списку доступних...`);
}
