function findUniq(arr) {
    if(arr.length >= 3)
    {
        if(arr[0] != arr[1] && arr[0] == arr[2]) return arr[1];
        else if(arr[0] != arr[1] && arr[1] == arr[2]) return arr[0];
    }
    var result = "   ";
    let k = 0;
    let firstElement = arr[k].replace(/\s/g,'').toLowerCase();
    while(firstElement == '' && k<arr.length)
    {
        k++;
        firstElement = arr[k].replace(/\s/g,'').toLowerCase();
        result = firstElement;
    }
    let set = new Set();
    charsOfFirstElement = [...firstElement];
    charsOfFirstElement.forEach(c => {
      set.add(c);
    });
    
    for(var i=1; i<arr.length; i++)
    {
      let str = arr[i].replace(/\s/g,'').toLowerCase();
      charsOfStr = [...str];
      charsOfStr.forEach(c => {
        if(!set.has(c))
        {
          result = arr[i];
        }
      });
    }
    return result;
  }