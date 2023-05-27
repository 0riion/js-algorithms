/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	const countMap = nums.reduce((acc, curr) => {
		acc[curr] = (acc[curr] || 0) + 1;
		return acc;
	}, {});

	for (const [key, value] of Object.entries(countMap)) {
		if (value > 1) {
			return true;
		}
	}

	return false;
};

// Solution 2: is more efficient
var containsDuplicate = function (nums) {
	const numSet = new Set();

	for (let i = 0; i < nums.length; i++) {
		if (numSet.has(nums[i])) {
			return true;
		}
		numSet.add(nums[i]);
	}

	return false;
};
