// convertToBST.c


/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
struct TreeNode* helper(int *nums, int start, int end)
 {
     struct TreeNode* node = NULL;
     int mid;
     if(start > end)
        return NULL;
     mid = (start + end)/2;
     node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
     node->left = node->right = NULL;
     node->val = nums[mid];
     node->left = helper(nums, start, mid-1);
     node->right = helper(nums, mid+1, end);
     return node;
 }
 
 struct TreeNode* sortedArrayToBST(int* nums, int numsSize) {
    return helper(nums, 0, numsSize-1);
}
