// inorderTraversal.js

 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }

var inorderTraversal = function(node) {
    var stack = [];
	var res = [];
	while (node || stack.length) {
		// drill left
		while (node) {
			stack.push(node);
			node = node.left;
		}
		// print & go to right child
		node = stack.pop();
		res.push(node.val);
		node = node.right;
	}
	return res;
};