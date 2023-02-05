function howManyGifts(maxBudget, gifts){
  let sortedAscending = gifts.sort((a,b) => a-b);
  let count = 0;
  let sum = 0;
  let i = 0;
  
  while(sum <= maxBudget) {
    count += 1;
    sum +=gifts[i];
    i += 1;
  }
  if(count > 0) count -= 1;
  
  return count;
}