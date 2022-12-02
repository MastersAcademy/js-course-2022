const firstNumber = 20;
const secondNumber = 22;
const operationAddition = "+";
const operationSubtraction = "-";
const operationMultiplication = "*";
const operationDivision = "/";
const operationRemainderOfDivision = "%";
const operationElevationToDegrees = "**";

if (operation === "+") {
    console.log(firstNumber + secondNumber);
} else if (operation === "-") {
    console.log(firstNumber - secondNumber);
} else if (operation === "*") {
    console.log(firstNumber * secondNumber);
} else if (operation === "/") {
    console.log(firstNumber / secondNumber);
} else if (operation === "%") {
    console.log(firstNumber % secondNumber);
} else if (operation === "**") {
    console.log(firstNumber ** secondNumber);
}

// switch
// const firstNumber = 20;
// const secondNumber = 22;
const operation = "*";
switch (operation) {
    case "*":
        console.log(firstNumber * secondNumber);
        break;
    case "+":
        console.log(firstNumber + secondNumber);
        break;
    case "-":
        console.log(firstNumber - secondNumber);
        break;
    case "*":
        console.log(firstNumber / secondNumber);
        break;
}
