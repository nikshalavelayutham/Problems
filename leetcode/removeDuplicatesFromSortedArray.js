// removeDuplicatesFromSortedArray.js

// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.

// For example,
// Given input array nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.



function removeDuplicates(arr) {
	var i = 0; 
    var j = i + 1;
    while (j < arr.length) {
    	if(arr[i] === arr[j]) {
    		i++;
    	} else {
    		i++;
    		arr[i] = arr[j];
    		j++;
    	}
    }
    return i + 1;
}