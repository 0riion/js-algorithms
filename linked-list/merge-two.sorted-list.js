// PROBLEM: https://leetcode.com/problems/merge-two-sorted-lists/

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

const createLinkedList = (arr) => {
	let dummy = new ListNode(0);
	let curr = dummy;

	for (let i = 0; i < arr.length; i++) {
		curr.next = new ListNode(arr[i]);
		curr = curr.next;
	}

	return dummy.next;
};

const list1 = createLinkedList([1, 3, 5]);
const list2 = createLinkedList([2, 4, 6]);
console.log('list1', list1);
console.log('list2', list2);

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const dummyExample = {};
const currentExample = {};

var mergeTwoLists = function (list1, list2) {
	if (!list1) return list2;
	if (!list2) return list1;

	// create a dummy node, which will be the head of the merged list
	let dummy = new ListNode(0);
	// the current node will be the dummy node
	let curr = dummy;
	let counter = 0;

	while (list1 && list2) {
		console.log(`-------------------${counter}-------------------`);
		console.log('curr', curr);
		console.log('dummy', dummy);
		console.log(list1.val, list2.val);
		counter++;

		if (list1.val <= list2.val) {
			curr.next = list1;
			list1 = list1.next; // next node of the current node
		} else {
			curr.next = list2;
			list2 = list2.next; // next node of the current node
		}

		curr = curr.next;
	}

	if (list1) curr.next = list1;
	if (!list1) curr.next = list2;

	console.log(dummy.next);

	return dummy.next;
};

mergeTwoLists(list1, list2);
// mergeTwoLists([1, 2, 4], [1, 3, 4]); // [1,1,2,3,4,4]
// mergeTwoLists([], []); // []
// mergeTwoLists([], [0]); // [0]
