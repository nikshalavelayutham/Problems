// complexNumberMultiply.js


// Input: "1+1i", "1+1i"
// Output: "0+2i"
// Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.


var complexNumberMultiply = function(a, b) {
    var aarr = a.split("+");
    var barr = b.split("+");
    var a1,a2, b1, b2;
     a1 = parseInt(aarr[0]);
     a2 = parseInt(barr[0]);
     b1 = parseInt(aarr[1]);
     b2 = parseInt(barr[1])
    var str = ""
    var c = (a1*a2) - (b1 * b2);
    var d = (a1 * b2)  + (b1 * a2);
    if(c<0) {
        str = '-'+ Math.abs(c) + '+' + d +'i';
    }else if(d<0) {
        str = c+'+'+'-'+ Math.abs(d) + 'i';
    }else {
        str = c + '+' + d + 'i';
    }
    return str;
    
    
    
};