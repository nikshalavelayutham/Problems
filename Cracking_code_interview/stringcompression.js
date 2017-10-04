// stringcompression.js

/*
Write a method to implement string compression
*/

function stringCompression(str) {
  var a = {};
  var strArr = str.split("");
  var newstr = [];
  strArr.forEach((element) => {
    if(a[element] === undefined) {
      a[element] = 1;
    } else {
        a[element]++;
    }
  });
  for(var key in a) {
    newstr.push(key, a[key]);
  }
  return newstr.join("");
}
