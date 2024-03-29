// PROBLEM: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
  if (nums.length === 0) {
    return null;
  }

  const midIndex = Math.floor(nums.length / 2);

  const root = new TreeNode(nums[midIndex]);

  // Recursively construct the left and right subtrees
  root.left = sortedArrayToBST(nums.slice(0, midIndex));
  root.right = sortedArrayToBST(nums.slice(midIndex + 1));

  return root;    
};
