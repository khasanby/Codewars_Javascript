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