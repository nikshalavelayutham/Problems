//isGreaterThanTen.js
/*
Write a function called “isGreaterThan10”.
Given a number, “isGreaterThan10” returns whether the given number is greater than 10.

var output = isGreaterThan10(11);
console.log(output); // --> true
*/

function isgreaterThan10 (num) {
	if(typeof num !== "number") {
		return false;
	}
	if(num <= 10) {
		return false
	}
	return true;
}