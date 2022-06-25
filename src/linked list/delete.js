"use strict";

const Node = require("../node");

// We can add anything in the linked list (number,string,...etc).

// It is the first code that will execute in the compiler.
class deleteLinkedList {
  // Constract the list.
  // Each Node will have two things (value,next).
  constructor() {
    // Null = default value, that is mean if the list is empty and the is no head.

    this.head = null; // First element of the list.
    this.tail = null; // Last element of the list.
    this.next = null; // Next element of the list.

    // To track the size of the list, 0 is the initial index.
    this.size = 0;
  }

  // Remove first Node
  // It will remove the first Node in the list automatically without any parameters.
  removeFirst() {
    // Check if the list is empty.
    if (this.size === 0) {
      return null;
    }
    // If has only one element.
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    }
    // Advance the head to the next Node
    else {
      // Remove the Node and site the next to the next Node.
      this.head = this.head.next;
    }
    this.size--;
    return this.head;
  }

  // Remove at index
  removeAt(index) {
    // If the index is not exist or greater than the index.
    if (index > 0 && index > this.size) {
      return console.log(null);
    }
    // Make the current Node to be the first node.
    let current = this.head;
    let previous;
    let count = 0;
    // Remove first index if there is just it.
    if (index === 0) {
      return this.removeFirst();
    } else {
      // While the count less than the index and not equal 0.
      while (count <= index) {
        count++;
        // To site the previous Node to be equal the current Node.
        previous = current;
        current = current.next;
      }
      // To remove the Node.
      previous.next = current.next;
    }
    this.size--;
  }

  // Remove last Node
  // It will remove the last Node in the list automatically without any parameters.
  removeLast() {
    // Check if the list is empty.
    if (this.size === 0) {
      return null;
    }
    // If has only one element.
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    }
    // Advance the head to the next Node.
    else {
      let current = this.head;
      // To sure the end of the tail is not Null.
      while (current.next.next != null) {
        current = current.next;
      }
      // Remove the Node and site the tail to the new Node
      current.next = null;
      this.tail = current;
    }
    this.size--;
    return this.tail;
  }

  // Clear the list
  clearList() {
    this.head = null;
    this.size = 0;
  }
}

module.exports = deleteLinkedList;
