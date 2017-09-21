// areValidCredentials.js


// Write a function called “areValidCredentials”.

// Given a name and a password, “areValidCredentials”, returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.

// var output = areValidCredentials('Ritu', 'mylongpassword')
// console.log(output); // --> true
// Your Code Should Pass:


function areValidCredentials(name, password) {
  if(name.length > 3 && password.length >= 8) {
  	return true;
  }
  return false;
}