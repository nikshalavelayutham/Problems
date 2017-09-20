// joinArrays.js
/*
Write a function called “joinArrays”.

Given two arrays, “joinArrays” returns an array with the elements of “arr1” in order, followed by the elementsin “arr2”.

var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
*/

function joinArrays(arr1, arr2) {
	if((!Array.isArray(arr1)) || (!Array.isArray(arr2))) {
		return [];
	}else {
		arr2.forEach(function(element, index, arr2){
			arr1.push(element)
		});
	}
	return arr1;
}