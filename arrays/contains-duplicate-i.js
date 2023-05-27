// PROBLEM: https://leetcode.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
	for (let indexI = 0; indexI < nums.length; indexI++) {
		for (let indexJ = 0; indexJ < nums.length; indexJ++) {
			if (
				indexI !== indexJ &&
				nums[indexI] === nums[indexJ] &&
				Math.abs(indexI - indexJ) <= k
			) {
				return true;
			}
		}
	}

	return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
