// or.js

/*

Write a function called “or”.

Given 2 boolean expressions, “or” returns true or false, corresponding to the ‘||’ operator.
Notes:
* Do not use the || operator.
* Use ! and && operators instead.

var output = or(true, false);
console.log(output); // --> true;

*/
function or(bool1, bool2){
	if(!(bool1) && !(bool2)){
		return false;
	}
	return true;
}