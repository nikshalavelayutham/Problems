// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
// The binary search tree is guaranteed to have unique values.


function rangeSumTree(node, left, right) {

	var result = 0; 

	if(node === null) {
		return result;
	}

	if(node.val >= left && node.val <= right) {
		result += node.val;
	}

	 return result + rangeSumTree(node.left, left, right) + rangeSumTree(node.right, left, right)
}