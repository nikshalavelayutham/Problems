/* Given a n-ary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. */


function depthOf_NaryTree(root) {
    // body...s

    if(root === null) {
        return 0;
    }

    var depth = 0;

    for(var i = 0 ; i <  root.children.length; i++) {
        depth = Math.max(depth, depthOf_NaryTree(root.children[i]));
    }

    return depth + 1
}