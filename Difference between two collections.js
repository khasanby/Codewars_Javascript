//DESCRIPTION:
//Task:
//Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.
//Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.
// Link: https://www.codewars.com/kata/5a84d485742ba347b90006b7

function diff(a, b){
  let difference = [];
  for(let i=0; i<a.length; i++) {
    if(b.indexOf(a[i]) < 0) difference.push(a[i]);
  }
  for(let i=0; i<b.length; i++) {
    if(a.indexOf(b[i]) < 0) difference.push(b[i]);
  }
  
  difference = difference.sort();
  return [...new Set(difference)];
}
