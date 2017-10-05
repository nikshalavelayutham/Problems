// detectLoop.js

/* Implement an algorithm to detect the loop in circular linked list */

function detectLoop(head) {
 var p1, p2, isLoop;
  p1 = head;
  p2 = head;
  
  while (p2.next.next !== null) {
    p1 = p1.next;
    p2 = p2.next.next;

    if (p2 === p1) {
      isLoop = true;
      break;
    }
  }
  if (isLoop) {
    p1 = head;
    while (p1 !== p2) {
      p1 = p1.next;
      p2 = p2.next;
    }
    return p1;
  } else {
    return;
  }

}