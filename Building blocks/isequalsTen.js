//isequalsTen.js
/*
Write a function called “equalsTen”.
Given a number, “equalsTen” returns whether or not the given number is 10.

var output = equalsTen(9);
console.log(output); // --> false
*/

function isEqualsTen(num) {
	if(typeof num !== "number" || num !== 10) {
		return false;
	}
	return true;
}