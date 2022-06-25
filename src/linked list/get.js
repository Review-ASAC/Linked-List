"use strict";

const Node = require("../node");

// We can add anything in the linked list (number,string,...etc).

// It is the first code that will execute in the compiler.
class getLinkedList {
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

  // Get at index
  // To git the value of the index.
  // finds the index of element
  getAt(index) {
    // Site the current variable to the beginning
    let current = this.head;
    // To do the loop.
    let count = 0;
    while (current) {
      if (count == index) {
        // If the count equal the index return the Node data.
        return console.log(current.data);
      }
      // To increase the count that will equal the index by 1.
      count++;
      // To move along of the linked list.
      current = current.next;
    }
    // Return null if he list is empty
    return console.log(null);
  }

  // IndexOf
  // This method is meant to find where a given element is placed in our list.
  indexOf(data) {
    let nodeIndex = 0;
    let current = this.head;
    while (current) {
      // To do comparison if the Node is the one we are looking for.
      if (data === current.data) {
        // return the value of nodeIndex.
        return nodeIndex;
      }
      // If it is not same data we need to increment 1 to nodeIndex and make current to be current.next
      nodeIndex++;
      current = current.next;
    }
    // If we can't find the data.
    return null;
  }

  // Git first elements
  getFirst() {
    return this.head.data;
  }

  // Git the size of the elements
  getSize() {
    return console.log(this.size);
  }

  getProps() {
    return `Length: ${this.size} || Head: ${this.head.data} || Tail: ${this.tail.data}`;
  }

  // To represent the Nodes in string way.
  // To used to have an overview of our list
  toString() {
    // To represent current Node.
    let current = this.head;
    let result = "";
    // Check if the list is empty.
    // Check if the list is empty, then loop thru all the Nodes if it is not empty.
    while (current != null) {
      // To have the current data.
      result += `{ ${current.data} } -> `;
      // To have the next data.
      current = current.next;
    }
    return console.log(result);
  }

  // Includes
  // To check if our list have the Node data that we will give it and return true or false.
  includes(data) {
    // Initialize if it its not Include.
    let isInclude = false;
    let current = this.head;

    // Loop the Nodes to git witch one that have the same data.
    while (current) {
      if (current.data === data) {
        isInclude = true;
      }
      current = current.next;
    }
    // Return the result of our search.
    return isInclude;
  }

  // Print list data
  printListData() {
    // To represent current Node.
    let current = this.head;

    // Check if the list is empty.
    // Check if the list is empty, then loop thru all the Nodes if it is not empty.
    while (current != null) {
      // To have the current data property.
      console.log(current.data);
      // To have the next data.
      current = current.next;
    }
    // printListData print the last Node to the first Node.
  }
}

module.exports = getLinkedList;
