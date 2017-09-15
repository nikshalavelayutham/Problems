//cube.js
/*
Write a function called “cube”.

Given a number, “cube” returns the cube of that number.

var output = cube(3);
console.log(output); // --> 27

*/

function cube (num) {
	if(typeof num !== "number") {
		return 0;
	}
	return num * num * num;
}