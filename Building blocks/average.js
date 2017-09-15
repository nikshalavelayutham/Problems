//average.js
/*
Write a function called “average”.

Given two numbers, “average” returns their average.

var output = average(4, 6);
console.log(output); // --> 5

*/
function average(num1, num2) {
	if(typeof num1 !== "number" || typeof num2 !== "number") {
		return 0;
	}
	return Math.floor((num1 + num2) / 2);
}