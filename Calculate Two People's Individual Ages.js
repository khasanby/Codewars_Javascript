function getAges(sum,difference){
  if(sum <= 0 || difference <= 0 || sum < difference) return null;  
  let b = (sum-difference)/2;
  let a = b + difference;
  let ans = [a,b];
  
  return ans;
};