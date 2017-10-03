// containsDuplicate.js


var containsDuplicate = function(nums) {
    var a = {};
    for(var i = 0; i < nums.length; i++) {
        if(a[nums[i]] === undefined) {
            a[nums[i]] = 1;
        } else {
            a[nums[i]]++;
        }
    }
    for(var j = 0; j < nums.length; j++) {
        if(a[nums[j]] > 1) {
            return true;
        }
    }
    return false;
};