// getOddLengthWordsAtProperty.js


// Write a function called “getOddLengthWordsAtProperty”.

// Given an object and a key, “getOddLengthWordsAtProperty” returns an array containing all the odd length word elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no odd length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the given key, it should return an empty array.

// var obj = {
//   key: ['It', 'has', 'some', 'words']
// };
// var output = getOddLengthWordsAtProperty(obj, 'key');
// console.log(output); // --> ['has', 'words']


function getOddLengthWordsAtProperty(obj, key) {
	var result = [];
	if(obj[key].length === 0) {
		return [];
	}
	obj[key].forEach((element, index) => {
		if(element.length % 2 !== 0) {
			result.push(element);
		}
	});
	return result;
}