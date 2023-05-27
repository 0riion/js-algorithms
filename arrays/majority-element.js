// PROBLEM: https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */

// var majorityElement = function (nums) {
// 	const majorityNumberReference = Math.floor(nums.length / 2);
// 	let majorityNumber = 0;

// 	const countMap = nums.reduce((accumulator, currentValue) => {
// 		accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
// 		return accumulator;
// 	}, {});

// 	for (const [key, value] of Object.entries(countMap)) {
// 		if (value > majorityNumberReference) {
// 			majorityNumber = key;
// 		}
// 	}

// 	return majorityNumber;
// };

var majorityElement = function (nums) {
	let count = 0;
	let majority = null;

	for (let index = 0; index < nums.length; index++) {
		if (count === 0) {
			majority = nums[index];
		}

		if (nums[index] === majority) {
			count++;
		}

		if (nums[index] !== majority) {
			count--;
		}
	}

	return majority;
};

majorityElement([3, 3, 3, 3, 2, 5, 4]);
