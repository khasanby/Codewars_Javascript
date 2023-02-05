function modifyMultiply (str,loc,num) {
  let strSplitted = str.split(' ');
  let word = strSplitted[loc];
  return Array(num).fill(word).join('-');
} 