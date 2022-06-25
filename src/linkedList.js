"use strict";

const Node = require("./node");

// We can add anything in the linked list (number,string,...etc).

// It is the first code that will execute in the compiler.
class LinkedList {
  // Constract the list.
  // Each Node will have two things (data,next).
  constructor() {
    // Null = default data, that is mean if the list is empty and the is no head.

    this.head = null; // First element of the list.
    this.tail = null; // Last element of the list.
    this.next = null; // Next element of the list.

    // To track the size of the list, 0 is the initial index.
    this.size = 0;
  }
  //-------------------------------------------------------------------------------------------------------------------------------
  // To Array
  toArray() {}
  //-------------------------------------------------------------------------------------------------------------------------------
  // Git last elements
  getLast() {}
  //-------------------------------------------------------------------------------------------------------------------------------
  // Reverse the list of the Nodes
  reverse(node) {}
  //-------------------------------------------------------------------------------------------------------------------------------
  kthFormEnd(k) {}
  //-------------------------------------------------------------------------------------------------------------------------------
  zipLists(list1, list2) {}
  //-------------------------------------------------------------------------------------------------------------------------------
  isPalindrome(list) {}
  //-------------------------------------------------------------------------------------------------------------------------------
}

const ll = new LinkedList();
ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);
ll.insertFirst(4);
ll.insertFirst(5);

console.log("Print List");
ll.printListData();

module.exports = LinkedList;
