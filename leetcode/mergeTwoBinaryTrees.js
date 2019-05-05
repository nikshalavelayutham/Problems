// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
// You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.


/*Sample

Input: 
    Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
         3
        / \
       4   5
      / \   \ 
     5   4   7 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


function mergeTwoTress(t1, t2) {

    if(t1 === null &&  t2 === null) {
        return null;
    }

    var value = (t1 === null ? 0 : t1.val) + (t2 === null ? 0 : t2.val);
    var tree = new TreeNode(val);

    tree.left = mergeTwoTress(t1 === null ? null : t1.left , t2 === null ? null : t2.left);
    tree.right = mergeTwoTress(t1 === null ? null : t1.right, t2 === null ? null : t2.right);

    return Tree;
 }