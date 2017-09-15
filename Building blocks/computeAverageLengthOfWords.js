//computeAverageLengthOfWords.js
/*
Write a function called “computeAverageLengthOfWords”.

Given two words, “computeAverageLengthOfWords” returns the average of their lengths.

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6
*/

function computeAverageLengthOfWords(str1, str2) {
	if(typeof str1 !== "string" || typeof str2 !== string) {
		return 0;
	}
	return Math.floor((str1.length + str2.length) / 2);
}