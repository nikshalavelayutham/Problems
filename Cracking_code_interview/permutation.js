// permutation.js

/*
Given two strings check if one is permutation of the other
*/

function isPermutation(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }
  var a = str1.split("").sort().join("");
  var b = str2.split("").sort().join("");
  for(var i = 0; i < a.length; i++) {
    if(a.charAt(i) !== b.charAt(i)) {
      return false;
    }
  }
  return true;
}