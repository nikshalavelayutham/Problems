// kthTOLastelement.js

/*

Implement an algorithm to find Kth to last element of the singly linked list

*/

function kthTOLastelement(head, k) {
  if(head==null){
    return 0;
  }
  var slow = head;
  var fast = head;

  for(var i = 0; i < k; i++) {
    fast = fast.next;
  }

  while(fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow.data
}