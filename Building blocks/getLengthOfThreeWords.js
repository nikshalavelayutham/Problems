// getLengthOfThreeWords.js
/*
Write a function called “getLengthOfThreeWords”.

Given 3 words, “getLengthOfThreeWords” returns the sum of their lengths.

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14

*/

function getLengthOfThreeWords(str1, str2, str3) {
	return str1.length + str2.length + str3.length;
}