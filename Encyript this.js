var encryptThis = function(text) {
  if(text == '') {
    return null;  
  }
  
  let stringResults = [];
  let strSplitted = text.split(' ');
  strSplitted.forEach(str => {
    let charsOfstr = [...str];
    charsOfstr[0] = charsOfstr[0].charCodeAt(0);
    if(charsOfstr.length >= 2) {
      let second = charsOfstr[1];
      let last = charsOfstr[charsOfstr.length-1];
      charsOfstr[1] = last;
      charsOfstr[charsOfstr.length-1] = second;
    }
    stringResults.push(charsOfstr.join(''));
  });
  return stringResults.join(' ');
}