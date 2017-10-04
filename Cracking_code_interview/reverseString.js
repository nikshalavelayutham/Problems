// reverseString.js

/*
Implementation of string reverse
*/


function reverse(str) {
  var arr = str.split("");
  var temp;
  for(var i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
     arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr.join("");
}