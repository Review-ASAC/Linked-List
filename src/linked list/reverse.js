"use strict";

const Node = require("../node");

// We can add anything in the linked list (number,string,...etc).

// It is the first code that will execute in the compiler.
class reverseLinkedList {
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
}
module.exports = reverseLinkedList;
