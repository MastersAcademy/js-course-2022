const readline = require('readline');

const calcInterface = readline.createInterface({
  input: process.stdin,
  output:process.stdout,
});

const validOperators = [
  "+",
  "-",
  "*",
  "/"
];

 calcInterface.question("Enter the first number", (firstInput) => {
  const firstNumber = Number(firstInput);
  console.log(firstNumber);
  if (isNaN(firstNumber)) {
    console.log("Invalid number privided");
    return calcInterface.close();
  }
});
  calcInterface.question("Enter the operator", (operatorInput) => {
    if(!(validOperators.includes(operatorInput))) {
      console.log("Invalid operator provided");
      return calcInterface.close();
    }
  });
    calcInterface.question("Enter the second number", (secondInput) => {
      const secondNumber = Number(secondInput);
      console.log(secondNumber);
      if (isNaN(secondNumber)) {
        console.log("Invalid number privided");
        return calcInterface.close();
      }

      const result = calculatorLogic(firstNumber, operatorInput, secondNumber);
      console.log(`Your Result: ${result}`);
      calcInterface.close();
});

function calculatorLogic(firstNumber, operatorInput, secondNumber) {
  if (operation === "+") return firstNumber + secondNumber;
  else if (operation === "-") return firstNumber - secondNumber;
  else if (operation === "*") return firstNumber * secondNumber;
  else if (operation === "/") return firstNumber / secondNumber;
}