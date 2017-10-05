// isListPalindrome.js

/*
Implement a method to check if the linked list is palindrome or not
*/

function isListPalindrome(head) {
  var stack = new stack();
  var curr = head;

  while(curr !== null) {
    stack.push(curr);
    curr = curr.next;
  }
  curr = head;
  while(curr !== null) {
    node = stack.pop();
    if(curr.data !== node.data) {
      return false;
    }
  } return true;
}