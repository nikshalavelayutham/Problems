// findDuplicates.js

var findDuplicates = function(nums) {
   var a = [];
   nums.sort(function(a, b) { return a - b;});
   for(var i = 1 ; i < nums.length; i++) {
       if(nums[i] === nums[i - 1]){
           a.push(nums[i - 1]);
       }
   }
   return a;
};