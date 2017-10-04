// treesum.c

int treesum(struct TreeNode* node){
    if(node == NULL) 
        return 0;
    return node->val+treesum(node->left)+treesum(node->right);
}
int findTilt(struct TreeNode* root) {   
    if(root == NULL) 
        return 0;
    return abs(treesum(root->left)-treesum(root->right))+findTilt(root->left)+findTilt(root->right);
}