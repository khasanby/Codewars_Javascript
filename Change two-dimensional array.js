//DESCRIPTION:
//Function receive a two-dimensional square array of random integers. On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).
//(You can mutate the input if you want, but it is a better practice to not mutate the input)
// Link: https://www.codewars.com/kata/581214d54624a8232100005f

function matrix(array) {
  if(array.length == 0) return null;
  
  let i = array.length;
  for(let j=0; j<i; j++) {
    if(array[j][j] < 0) array[j][j] = 0;
    else array[j][j] = 1;
  }
  
  return array;
}
