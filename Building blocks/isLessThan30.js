//isLessThan30.js
/*
Write a function called “isLessThan30”.
Given a number, “isLessThan30” returns whether the given number is less than 30.

var output = isLessThan30(9);
console.log(output); // --> true
*/

function isLessThan30 (num) {
	if(typeof num !== "number" || num <= 30) {
		return false;
	}
	return true;
}