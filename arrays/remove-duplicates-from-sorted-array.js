// PROBLEM: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	const cleared = Array.from(new Set(nums));
	nums.splice(0, nums.length, ...cleared);
	return cleared.length;
};
