//isOdd.js
/*
Write a function called “isOdd”.
Given a number, “isOdd” returns whether the given number is odd.

var output = isOdd(9);
console.log(output); // --> true
*/

function isOdd(num) {
	if(typeof num !== number || num % 2 === 0) {
		return false;
	}
	return true;
}