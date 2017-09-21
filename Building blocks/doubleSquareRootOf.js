// doubleSquareRootOf.js
/*
Write a function called “doubleSquareRootOf”.
Given a number, “doubleSquareRootOf” returns double its square root.

var output = doubleSquareRootOf(121);
console.log(output); // --> 22
*/


function doubleSquareRootOf(num) {
	if(typeof num !== "number") {
		return 0;
	}
	return Math.sqrt(num) * 2;
}