// removeDuplicatesFromLinkedList.js

function removeDuplicatesFromLinkedList(head) {
	if(head === null) {
		return 
	}
	current  = head;
	while(current !== null) {
		newcurr = current;
		while(newcurr.next !== null) {
			if(newcurr.next.data === current.data) {
				newcurr.next = newcurr.next.next;
			} else {
				newcurr = newcurr.next;
			}
		}
	}
	current = current.next
}