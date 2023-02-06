//DESCRIPTION:
//Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:
//sum < 0
//difference < 0
//Either of the calculated ages come out to be negative
// Link: https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1

function getAges(sum,difference){
  if(sum <= 0 || difference <= 0 || sum < difference) return null;  
  let b = (sum-difference)/2;
  let a = b + difference;
  let ans = [a,b];
  
  return ans;
};
