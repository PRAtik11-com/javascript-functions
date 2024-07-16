function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function divide(x, y) {
    if (y === 0) {
      return "Error: Division by zero is not allowed";
    }
    return x / y;
  }
  
 
  let num1 = parseFloat(prompt("Enter the first number: "));
  let num2 = parseFloat(prompt("Enter the second number: "));
  let operation = prompt("Enter the operation (+, -, *, /): ");
  

  if (operation === "+") {
    result = add(num1, num2);
  } else if (operation === "-") {
    result = subtract(num1, num2);
  } else if (operation === "*") {
    result = multiply(num1, num2);
  } else if (operation === "/") {
    result = divide(num1, num2);
  } else {
    result = "Error: Invalid operation";
  }
  
  alert(`The result is: ${result}`);