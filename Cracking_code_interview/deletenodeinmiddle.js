// deletenodeinmiddle.js

/*
Implement a method to delete a node from the middle of the linked list 
*/


function deletenodeinmiddle(head) {

	if(head === null) {
		return;
	}
	var curr  = head;
	(curr.next != null) {
        curr.val = curr.next.val;
        curr.next = curr.next.next;
    } else {
        delete(curr); 
    }
}