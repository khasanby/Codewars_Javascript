function arrayDiff(a, b) {
  if(a.length == 0 || b.length == 0) return a;
  
  b.forEach(bElem => {
    a = a.filter(aElem => aElem != bElem);
  });
  return a;
}