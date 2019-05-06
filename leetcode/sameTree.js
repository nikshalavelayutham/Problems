/* Given two binary trees, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
*/

/* Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true */

function isSame(t1, t2) {

	if(t1 === null || t2 === null) {
		return t1 === t2;
	}

	return t1.val === t2.val && isSame(t1.left, t2.left) && isSame(t1.right, t2.right);
}