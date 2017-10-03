//reverseWords.js

var reverseWords = function(s) {
    var arr = s.split(" ");
    var newarr = [];
    for(var i = 0 ; i < arr .length; i++) {
      newarr.push(arr[i].split('').reverse().join(''));
    }
    return newarr.join(" ");
};