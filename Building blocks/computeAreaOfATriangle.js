//computeAreaOfATriangle.js
/*
Write a function called “computeAreaOfATriangle”.

Given the base and height of a triangle, “computeAreaOfATriangle” returns its area.

var output = computeAreaOfATriangle(4, 6);
console.log(output); // --> 12

*/


function computeAreaOfATriangle(base, height) {
	if(typeof base !== "number" || typeof height !== "number") {
		return 0;
	}
	return Math.floor((base * height) / 2);
}