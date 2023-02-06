//DESCRIPTION:
//Acknowledgments:
//I thank yvonne-liu for the idea and for the example tests :)
//Description:
//Encrypt this!
//You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
//Your message is a string containing space separated words.
//You need to encrypt each word in the message using the following rules:
//The first letter must be converted to its ASCII code.
//The second letter must be switched with the last letter
//Keepin' it simple: There are no special characters in the input.
// Link: https://www.codewars.com/kata/5848565e273af816fb000449

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
