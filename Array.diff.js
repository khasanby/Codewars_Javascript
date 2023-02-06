//DESCRIPTION:
//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.
// Link: https://www.codewars.com/kata/523f5d21c841566fde000009
function arrayDiff(a, b) {
  if(a.length == 0 || b.length == 0) return a;
  
  b.forEach(bElem => {
    a = a.filter(aElem => aElem != bElem);
  });
  return a;
}
