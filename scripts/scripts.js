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
let storeOne = true;

function operate(operator, num1, num2) {
  if (!num2) {
    return;
  }
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
      if (num2 === "0") {
        alert("You can't divide by zero.");
        return;
      }
      result = divide(num1, num2);
      break;
  }
  result = roundNumber(+result, 5).toString();
  console.log(num1);
  console.log(num2);
  updateDisplay(result);
  operand1 = result.toString();
  console.log(operand1);
  operand2 = "";
  storeOne = true;
}

function roundNumber(num, dec) {
  return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}

document.documentElement.addEventListener("keydown", (event) => {
  const key = event.key;
  if (!isNaN(+key)) {
    displayNumber(key);
  } else if (key === ".") {
    displayDot();
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    displayOperator(key);
  } else if (key === "Enter") {
    operate(operator, operand1, operand2);
  } else if (key === "Backspace") {
    deleteNumber();
  }
});

const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", deleteNumber);

function deleteNumber() {
  if (storeOne) {
    operand1 = operand1.substring(0, operand1.length - 1);
    updateDisplay(operand1);
  } else {
    operand2 = operand2.substring(0, operand2.length - 1);
    updateDisplay(operand2);
  }
}

const display = document.querySelector(".display");
  
const operators = document.querySelectorAll(".operations > button");
operators.forEach((op) => op.addEventListener("click", () => displayOperator(op.textContent)));

const numbers = document.querySelectorAll(".numPad button:not(#equal):not(#dot)");
numbers.forEach((num) => num.addEventListener("click", () => displayNumber(num.textContent)));

const dotBtn = document.querySelector("#dot");
dotBtn.addEventListener("click", displayDot);

function displayDot() {
  if (storeOne) {
    if (!operand1.includes(".")) {
      operand1 += ".";
      updateDisplay(operand1);
    }
  } else {
    if (!operand2.includes(".")) {
      operand2 += ".";
      updateDisplay(operand2);
    }
  }
}

function updateDisplay(str) {
  display.textContent = str;
}

function displayNumber(n) {
  if (storeOne) {
    operand1 += n;
    updateDisplay(operand1);
  } else {
    operand2 += n;
    updateDisplay(operand2);
  }
}

function displayOperator(op) {
  operator = op;
  if (operand2 !== "") {
    operate(operator, operand1, operand2);
    storeOne = false;
    return;
  }
  storeOne = false;
  updateDisplay("");
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
equal.addEventListener("click", () => {
  operate(operator, operand1, operand2);
});