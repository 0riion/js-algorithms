/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
	const numDigits = digits.length;

	for (let index = numDigits - 1; index >= 0; index--) {
		digits[index]++;

		if (digits[index] < 10) {
			return digits;
		} else {
			digits[index] = 0;
		}
	}

	digits.unshift(1);
	return digits;
};
