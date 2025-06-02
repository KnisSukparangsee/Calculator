function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let operand1 = "";
let operand2 = "";
let operator = "";
let flag = false;

function operate(operator, num1, num2) {
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
  }
  display.textContent = result;
  operand1 = result;
  operand2 = "";
}

const display = document.querySelector(".display");
  
const operators = document.querySelectorAll(".operations > button");
operators.forEach((op) => op.addEventListener("click", () => addOperator(op.textContent)));

const numbers = document.querySelectorAll(".numPad > button");
numbers.forEach((num) => num.addEventListener("click", () => addNumber(num.textContent)));

function updateDisplay() {
  display.textContent = `${operand1} ${operator} ${operand2}`;
}

function addNumber(n) {
  if (!flag) {
    operand1 += n;
  } else {
    operand2 += n;
  }
  display.textContent += n;
  console.log(`op1: ${operand1}`);
  console.log(`op2: ${operand2}`);
}

function addOperator(op) {
  operator = op;
  flag = !flag;
}


const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clear);

function clear() {
  display.textContent = "";
  operator = "";
  operand1 = "";
  operand2 = "";
}

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => operate(operator, operand1, operand2));