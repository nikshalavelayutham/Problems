//isEqualTo.js

/*
Write a function called “isEqualTo”.
Given 2 numbers, “isEqualTo” returns whether num2 is equal to num1.

var output = isEqualTo(11, 10);
console.log(output); // --> false
*/

function isEqualTo (num1, num2) {
	if(typeof num1 !== "number" || typeof num2 !== "number" || num1 !== num2){
		return false
	}
	return true;
}