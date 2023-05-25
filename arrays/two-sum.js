// PROBLEM: https://leetcode.com/problems/two-sum/
// Given an array of integers `nums` and an integer `target`,
// return the indices of the two numbers that add up to `target`.
//
// Assumptions:
// - Each input will have exactly one solution.
// - The same element cannot be used twice.
// - The answer can be returned in any order.
//
// Example 1:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//
// Example 2:
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]
//
// Example 3:
// Input: nums = [3, 3], target = 6
// Output: [0, 1]
//
// Constraints:
// - 2 <= nums.length <= 104
// - -109 <= nums[i] <= 109
// - -109 <= target <= 109
// - Only one valid answer exists.
//
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];

		if (map.has(complement)) {
			return [map.get(complement), i];
		}

		map.set(nums[i], i);
	}

	return [];
};
