// removeNumberValues.js

// var obj = {
//   a: 2,
//   b: 'remaining',
//   c: 4
// };
// removeNumberValues(obj);
// console.log(obj); // --> { b: 'remaining' }


function removeNumberValues(obj) {
	for(var key in obj) {
	  if(typeof obj[key] === "number") {
	    delete obj[key];
	  }
	}
	return obj;
}
