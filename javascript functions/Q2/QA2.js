function maxmin(arr) {
    if (arr.length === 0) {
      return { max: null, min: null };
    }
  
    let max = arr[0];
    let min = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
  
    return { max, min };
  }
  
  let arr = [25,56,78,50,10,68];
  let result = maxmin(arr);
  console.log(`Max: ${result.max}, Min: ${result.min}`);