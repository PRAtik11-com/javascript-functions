function cal(num1, num2, operation) {
    switch (operation) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          return "Error: Division by zero is not allowed";
        }
        return num1 / num2;
      default:
        return "Error: Invalid operation";
    }
  }
  
  let num1 = parseFloat(prompt("Enter the first number: "));
  let num2 = parseFloat(prompt("Enter the second number: "));
  let operation = prompt("Enter the operation (+, -, *, /): ");
  
  let result = cal(num1, num2, operation);
  
  alert(`The result is: ${result}`);