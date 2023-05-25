// PROBLEM: https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	if (nums.includes(target)) return nums.indexOf(target)
	let nextTarget = nums.findIndex((item) => item > target)
	let previousTarget = nums.findIndex((item) => item < target);

	if (nextTarget < 0) return nums.length
	if (nextTarget > 0) return nextTarget
	if (previousTarget <= 0) return 0
	return previousTarget++
};
