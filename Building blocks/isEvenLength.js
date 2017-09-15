//isEvenLength.js
/*
Write a function called “isEvenLength”.

Given a word, “isEvenLength” returns whether the length of the word is even.

var output = isEvenLength('wow');
console.log(output); // --> false
*/

function isEvenLength(str) {
	if(typeof str !== "string") {
		return false;
	}
	return str.length % 2 === 0;	
}