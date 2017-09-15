/*
Write a function called “isOddLength”.

Given a word, “isOddLength” returns whether the length of the given word is odd.

var output = isOddLength('special');
console.log(output); // --> true
*/

function isOddLength(str) {
	if(typeof str !== "string") {
		return false;
	}
	return str.length % 2 !== 0;
}