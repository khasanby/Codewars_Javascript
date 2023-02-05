function matrix(array) {
  if(array.length == 0) return null;
  
  let i = array.length;
  for(let j=0; j<i; j++) {
    if(array[j][j] < 0) array[j][j] = 0;
    else array[j][j] = 1;
  }
  
  return array;
}