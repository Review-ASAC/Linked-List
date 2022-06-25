"use strict";
const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  kthFormEnd(k) {
    let current = this.head;
    let count = 0;

    while (current.next) {
      count++;
      current = current.next;
    }

    if (k > count || k < 0) {
      return "Exception";
    } else {
      count = count - k;
      current = this.head;
      while (count > 0) {
        current = current.next;
        count--;
      }
      return current.value;
    }
  }

  zipLists(list1, list2) {
    let current1 = list1.head;
    let current2 = list2.head;
    while (current1) {
      if (current2) {
        list1.insertAfter(current1.value, current2.value);
        current2 = current2.next;
      }
      if (current1.next) {
        current1 = current1.next.next;
      } else {
        current1 = current1.next;
      }
    }
    while (current2) {
      list1.append(current2.value);
      current2 = current2.next;
    }
    return list1;
  }

  isPalindrome(list) {
    let current1 = list.head;
    let current2 = list.head;

    // Initialize result
    let result = true;

    // Initialize array
    let arr = [];
    // a stack in JS is an array.
    if (list !== null && list.next !== null) {
      //
      // push all elements of l into the stack.
      while (current1) {
        arr.push(current1.value);
        current1 = current1.next;
      }
      // Traverse the list again & check by popping from the stack:
      while (current2) {
        // get the top most element on the stack:
        let newVal = arr.pop();
        // check if the node data isn't the same as the element popped:
        if (newVal !== current2.value) {
          result = false;
          break;
        }
        // move ahead:
        current2 = current2.next;
      }
      return result;
    } else {
      return false;
    }
  }
}

module.exports = LinkedList;
