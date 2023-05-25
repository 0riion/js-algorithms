// PROBLEM: https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	const elementsM = nums1.slice(0, m);
	const merged = elementsM.concat(nums2).sort((a, b) => a - b);

	for (let index = 0; index < m + n; index++) {
		nums1[index] = merged[index];
	}

	return nums1.slice(0, m + n);
};
