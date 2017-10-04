// isStringRotated.js

/*
If one string is rotation of the other
*/



function isStringRotated(str1, str2) {
	var str1 = str1 + str1;
	if(str1.length !== str2.length) {
		return false;
	}
	return str1.indexOf(s2) !== -1;
}