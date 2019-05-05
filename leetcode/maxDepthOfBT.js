/* Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Note: A leaf is a node with no children. */


function maxDepthOfBT(argument) {
    // body...

    if(root === null) {
        return 0;
    }

    return Math.max(maxDepthOfBT(root.left), maxDepthOfBT(root.right)) + 1;
}