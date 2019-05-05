/*Given an n-ary tree, return the postorder traversal of its nodes' values.*/



 
function postOrder(root) {
	if(root === null)  {
		return [];
	}

	var arr = [];
  postorderTraversal(root);

  function PostorderTraversal(root) {

    if(!root. children) {
      return arr;
    }

    for(i = 0; i < root.children.length; i++) {
      postorderTraversal(root.children[i]);
    }

    arr.push(root.val);
  }

  return arr;

}


