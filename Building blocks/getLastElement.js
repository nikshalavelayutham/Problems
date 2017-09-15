//getLastElement.js

/*
Write a function called “getLastElement”.

Given an array, “getLastElement” returns the last element of the given array.

Notes:
* If the given array has a length of 0, it should return ‘undefined’.

var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4

*/
function getLastElement(arr) {
	if(arr.length === 0) {
		return undefined;
	}
	var element = arr.pop()
	return element;
}