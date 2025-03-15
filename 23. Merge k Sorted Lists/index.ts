class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let smallestIndex;
  lists.forEach((list, index) => {
    if (!list) return
    if (!smallestIndex) smallestIndex = index;
    if (!lists[smallestIndex]) throw new Error("something went wrong");
    
    if (list.val < lists[smallestIndex].val) smallestIndex = index;
  });

  let nextSmallestValue = lists[0];
}
