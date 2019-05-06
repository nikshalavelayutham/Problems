// Given a binary tree, return the inorder traversal of its nodes' values.

/* Example: Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2] */
function inOrderBT(node) {
	 
	 var res = [];
     
    function inOrder(root) {
        if(!root) {
            return;
        }
        
        inOrder(root.left);
        res.push(root.val);
        inOrder(root.right);
    }
    
    inOrder(node);
    return res;
};
