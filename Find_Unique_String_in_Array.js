//DESCRIPTION:
//There is an array of strings. All strings contains similar letters except one. Try to find it!

//findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
//findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
//Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

//It’s guaranteed that array contains more than 2 strings.

//This is the second kata in series:

//Find the unique number
//Find the unique string (this kata)
//Find The Unique
// Link: https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

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
