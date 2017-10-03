// firstUniqChar.js

var firstUniqChar = function(s) {
    var a = {};
    for(var i = 0;  i < s.length; i++) {
        if(a[s[i]] === undefined) {
            a[s[i]] = 1;
        } else {
            a[s[i]]++;
        }
    }
    for(var j = 0; j < s.length; j++) {
        if(a[s[j]] === 1) {
            return j;
        }
    }
    return -1;
};