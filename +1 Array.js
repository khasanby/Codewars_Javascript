function upArray(arr){
    let last = (arr[arr.length-1]+1)%10;
    let rem = Math.floor((arr[arr.length-1]+1)/10);
    let zeroCount = 0;
    
    if(arr.some(element => element < 0 || element >= 10) || arr.length == 0) {
      return null;
    }
    
    if(rem > 0) {
      for(var i=arr.length-1; i>=0; i--) {
        var temp = (arr[i]+rem)%10;
        rem = Math.floor((arr[i]+rem)/10);
        arr[i] = temp;
        if(arr[i] == 0) {
          zeroCount += 1;
        }
      }
      if(zeroCount == arr.length) {
        let result = [];
        result[0] = 1;
        for(let k=0; k<arr.length; k++) {
          result[k+1] = arr[k];
        }
        return result;
      }
      else {
        return arr;
      }
    }
    else {
      arr[arr.length-1] = last;
      return arr;
    }
  }