//isLessThan.js
/*
Write a function called “isLessThan”.
Given 2 numbers, “isLessThan” returns whether num2 is less than num1.

var output = isLessThan(9, 4);
console.log(output); // --> true
*/

function isLessThan(num1, num2) {
	if(typeof num1 !== "number" || typeof num2 !== "number") {
		return false;
	}
	if(num2 <= num1) {
		return true;
	}
	return false;
}