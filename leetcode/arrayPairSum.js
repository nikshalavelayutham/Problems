// arrayPairSum.js


// Input: [1,4,3,2]

// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).


var arrayPairSum = function(nums) {
    var sum = 0;
    nums.sort(function(a, b) {
        return a - b;
    });
    
    for(var i = 0; i < nums.length; i = i + 2) {
        sum += nums[i];
    }
    
    return sum;
};