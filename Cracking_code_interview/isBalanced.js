// isBalanced.js


/*Check if the tree is balanced or not */


function isBalanced(node) {
	if(node == NULL)
    return true; 
	
	lh = height(node.left);
	rh = height(node.right);

	var heightDiff = lh - rh;
	if(heightDiff > 1 || heightDiff < -1) {
		return false;
	} else {
		return isBalanced(node.left) && isBalanced(node.right)
	}
   
}
function height(node) {
   if(node === NULL) 
   	return 0;
   var lh = height(node.left);
   var rh = height(node.right);

   return Math.max(lh, rh) + 1;
}

