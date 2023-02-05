function findEvenIndex(arr) {
  let sum = 0;
  let leftSum = 0;
  
  for(var i=0; i<arr.length; i++) {
    sum += arr[i];
  }
  
  for(var i=0; i<arr.length; i++) {
    sum -= arr[i];
    if(sum == leftSum) {
      return i;
    }
    
    leftSum += arr[i];
  }
  
  return -1;
}