// getAllElementsButLast.js
/*

Write a function called “getAllElementsButLast”.

Given an array, “getAllElementsButLast” returns an array with all the elements but the last.

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]

*/

function getAllElementsButLast(arr) {
	return arr.splice(0, arr.length - 1)
}