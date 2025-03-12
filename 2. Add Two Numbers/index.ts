class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// const calculateNodeNumber = (listNode: ListNode) => {
//   let result = 0;
//   let currentList: ListNode | null = listNode;
//   for (let i = 1; currentList; i = i * 10) {
//     result += currentList.val * i;
//     currentList = currentList.next;
//   }
//   return result;
// };

// const numToNode = (number: number) => {
//   const string = number.toString().split("").reverse().join("");

//   let result = new ListNode(parseInt(string[0]));
//   let current = result;
//   for (let i = 1; i < string.length; i++) {
//     current.next = new ListNode(parseInt(string[i]));
//     current = current.next;
//   }

//   return result;
// };

// function addTwoNumbers(
//   l1: ListNode | null,
//   l2: ListNode | null
// ): ListNode | null {
//   if (!l1 || !l2) return new ListNode(0);

//   const l1Result = calculateNodeNumber(l1);
//   const l2Result = calculateNodeNumber(l2);

//   const sum = l1Result + l2Result;

//   const nodeResult = numToNode(sum);

//   return nodeResult;
// }


const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  let dummy = new ListNode(0);
  let temp = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    temp.next = new ListNode(sum % 10);
    temp = temp.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  return dummy.next;
};

addTwoNumbers(
  new ListNode(1, new ListNode(2, new ListNode(3))),
  new ListNode(1, new ListNode(2, new ListNode(3)))
);