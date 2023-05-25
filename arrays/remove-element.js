// PROBLEM: https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
	const filtered = nums.filter((num) => num != val);
	return nums.splice(0, nums.length, ...filtered).length;
};
