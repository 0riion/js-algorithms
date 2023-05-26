// PROBLEM: https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function (numRows) {
	if (numRows === 0) {
		return [];
	}

	var triangle = [[1]];
	for (var i = 1; i < numRows; i++) {
		var newRow = [];
		for (var j = 0; j <= i; j++) {
			if (j === 0 || j === i) {
				newRow.push(1);
			} else {
				newRow.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
			}
		}
		triangle.push(newRow);
	}

	return triangle;
};
