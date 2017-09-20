// convertDoubleSpaceToSingle.js

// Given a string, “convertDoubleSpaceToSingle” returns the passed in string, with all the double spaces converted to single spaces.

// var output = convertDoubleSpaceToSingle("string  with  double  spaces");
// console.log(output); // --> "string with double spaces"


function convertDoubleSpaceToSingle(str) {
	if(typeof str !== "string") {
		return "";
	}
	var a = str.split("  ");
	return a.join(" ");
}