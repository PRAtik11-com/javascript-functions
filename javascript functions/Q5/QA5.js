function sumArrayElements(arr1) {
    return arr1.reduce((acc, current) => acc + current, 0);
  }
  
  // Example usage:
  let arr2 = [1, 2, 3, 4, 5];
  let result = sumArrayElements(arr2);
  console.log(`The sum of the array elements is ${result}`);