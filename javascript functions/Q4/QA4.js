function fact(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  }
  
  let num = 7;
  let result = fact(num);
  console.log(`The factorial of ${num} is ${result}`);