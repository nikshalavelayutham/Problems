// computeAverageOfNumbers.js

// Write a function called “computeAverageOfNumbers”.

// Given an array of numbers, “computeAverageOfNumbers” returns their average.

// Notes:
// * If given an empty array, it should return 0.

// var input = [1,2,3,4,5];
// var output = computeAverageOfNumbers(input);
// console.log(output); // --> 3

function computeAverageOfNumbers(arr) {
	var sum  = 0
	if(arr.length === 0) {
		return [];
	}
	arr.forEach((element, index) => {
		sum += element;
	});

	return MAth.floor(sum / arr.length);
}