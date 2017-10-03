//longestUncommonSubsequence.js

var findLUSlength = function(a, b) {
    if (a === b) {
        return -1;
    } 
    else return Math.max(a.length, b.length);
};

// Input: "aba", "cdc"
// Output: 3
// Explanation: The longest uncommon subsequence is "aba" (or "cdc"), 
// because "aba" is a subsequence of "aba", 
// but not a subsequence of any other strings in the group of two strings. 