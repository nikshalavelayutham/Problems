// getAllElementsButNth.js

// Write a function called “getAllElementsButNth”.

// Given an array and an index, “getAllElementsButNth” returns an array with all the elements but the nth.

// var output = getAllElementsButNth(['a', 'b', 'c'], 1);
// console.log(output); // --> ['a', 'c']


function getAllElementsButNth(arr, index) {
	var newArr = [];
	arr.forEach(function(element, i) {
		if(i !== index) {
			newArr.push(element);
		}
	});
	return newArr;
}