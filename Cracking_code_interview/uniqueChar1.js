// uniqueChar1.js
/*
Implement an algorithm to determine if string has all unique characters.
*/

function unique(str) {
  var a = {};
  var arr = str.split("");
  console.log(arr);
  arr.forEach((element) => {
    if(a[element] === undefined) {
      a[element] = 1;
    }
    else {
      a[element]++;
    }
  });
  
  for(var key in a) {
    if(a[key] > 1) {
      return false;
    }
  }
  return true;
}

unique("faaar");