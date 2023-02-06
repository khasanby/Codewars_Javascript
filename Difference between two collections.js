//DESCRIPTION:
//Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

//The collections can contain any character and can contain duplicates.
// Link: https://www.codewars.com/kata/594093784aafb857f0000122

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
