/*  A binary tree is univalued if every node in the tree has the same value.
 Return true if and only if the given tree is univalued.  */




 function isUnivaluedBT(root) {

    if(root === null) {
        return true;
    }

    if(root.left !== null && root.val !== root.left.val) {
        return false;
    }

    if(root.right !== null && root.val !== root.right.val) {
        return false;
    }

    return isUnivaluedBT(root.left) && isUnivaluedBT(root.right);
 }

