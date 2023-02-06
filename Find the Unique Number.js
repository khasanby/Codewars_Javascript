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
  return arr.find(
    (item) => arr.indexOf(item) === arr.lastIndexOf(item);
  );
}
