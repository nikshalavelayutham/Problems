//Given an n-ary tree, return the preorder traversal of its nodes' values.

function preorder(root) {

	if(root === null) {
		return [];
	}

	var result = [];

	preorderTraversal(root);

	function preorderTraversal(root) {

		if(!root.children) {
			return result
		}

		result.push(root.val);

		for(var i = 0 ; i <  root.children.length; i++) {
			preorderTraversal(root.children[i]);
		}
	}

	return result;
}