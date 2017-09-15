//isSameLength.js

/*
Write a function called “isSameLength”.

Given two words, “isSameLength” returns whether the given words have the same length.

var output = isSameLength('words', 'super');
console.log(output); // --> true
*/

function isSameLength(str1, str2) {
	if(typeof str1 !== "string" || typeof str2 !== "string") {
		return false;
	}
	return str1.length === str1.length;
}