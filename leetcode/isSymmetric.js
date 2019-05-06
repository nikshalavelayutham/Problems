/*Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3 */


function isSymmetric(root) {

	if(root === null) {
		return true;
	}
	return isMirror(root.left, root.right);
}

function isMirror(root1, root2) {
	if(root1 === null && root2 === null) {
		return true;
	}

	if(root1 !== null && root2 !== null && root1.val  === root2.val) {
		return isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left);
	}
	return false;
}