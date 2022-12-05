// const operation = prompt("Please choose operation by entering: add, sub, mult, div or use symbol (+; -; *; /)");
const errorMessage = 'Please, enter the valid operation.';
  
let operation;
do {
  operation = prompt("Please choose operation by entering: add, sub, mult, div or use symbol (+; -; *; /)");
} while (operationChecker(operation) == false);

let firstNumber;
do {
  firstNumber = +prompt("Enter the first number");
} while (Number.isNaN(firstNumber) == true);

let secondNumber;
do {
  secondNumber = +prompt("Enter the second number");
} while (Number.isNaN(secondNumber) == true);

switch (operation) {
  case 'add': //sum
  case '+': {
    alert(`${firstNumber} + ${secondNumber} = ` + sum(firstNumber, secondNumber));
  }
  break;
  case 'sub': //subtraction
  case '-': {
    alert(`${firstNumber} - ${secondNumber} = ` + subtraction(firstNumber, secondNumber));
  }
  break;
  case 'mult': //multiplication
  case '*': {
    alert(`${firstNumber} * ${secondNumber} = ` + multiplication(firstNumber, secondNumber));
  }
  break;
  case 'div': //division
  case '/': {
    alert(`${firstNumber} / ${secondNumber} = ` + division(firstNumber, secondNumber));
  }
  break;
  default:
    break;
}

function sum(a, b) {
  return a + b;
}

function subtraction (a, b) {
  return a - b;
}

function multiplication (a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function operationChecker(operation) {
  if (operation === 'add' || operation === '+'
    || operation === 'sub' || operation === '-'
    || operation === 'mult' || operation === '*'
    || operation === 'div' || operation === '/') {
    return true;
  } else {
    alert(errorMessage);
    return false;
  }
}