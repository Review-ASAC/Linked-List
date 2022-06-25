"use strict";

const Node = require("../node");

// We can add anything in the linked list (number,string,...etc).

// It is the first code that will execute in the compiler.
class insertLinkedList {
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

  // Insert Node
  // The add method takes argument data which is the data that you want to add to the list.
  // It will add this to the end of the list.
  insert(data) {
    let node = new Node(data);
    let current;
    // checks that is the list is empty.
    if (this.head == null) {
      //  If the list is empty it will add the node to the head of the list.
      this.head = node;
    }
    // Else it will traverse to the end of the list and then add the element.
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  // Insert first Node
  // Insert first Node also called prepending.
  // Insert the Node in the beginning of the Linked list and make it the first Node.
  insertFirst(data) {
    try {
      // If there is any data in the head this will be pushed to the next head.
      // If the linked list empty, then the head will be pushed to be the first head.
      this.head = new Node(data, this.head);
      // make the list size increase after adding a new Node.
      this.size++;
    } catch (error) {
      // To catch the error in the inserting.
      console.error("Error in inserting data");
    }
  }

  // Insert last Node
  // Insert last Node also called Append
  insertLast(data) {
    // construct new Node that pase in data.
    let node = new Node(data);
    // initialize variable.
    let current;
    // If the list is empty, make the new data to be the head.
    if (!this.head) {
      // Make the head equal the node.
      this.head = node;
    }
    // If there is ready Node.
    else {
      current = this.head;
      // If there is ready Node then we need to loop thru Nodes.
      while (current.next) {
        // If there is Node in the list then it will be the next Node.
        current = current.next;
      }
      // Do the Node to be the end head.
      current.next = node;
    }
    // make the list size increase after adding a new Node.
    this.size++;
  }

  // Append adding Node in the end of the tail Linked List.
  append(data) {
    // Create a new Node to insert it.
    let node = new Node(data);

    // check if the list is empty
    // if (!this.head) or
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // Insert at index
  // To insert any Node between the current Nodes (insert at a certain position).
  insertAt(data, index) {
    // If the index is out of range.
    if (index > 0 && index > this.size) {
      // Return the Node data.
      return;
    }
    // If the Node is the first index.
    if (index === 0) {
      // Like reuse the this.insertFirst(data).
      this.head = new Node(data, this.head);
      // Return the Node data.
      return;
    }
    const node = new Node(data);
    let current, previous;
    // Set current to be the first.
    current = this.head;
    // To do the loop.
    let count = 0;
    while (count < index) {
      // The previous Node before index.
      previous = current;
      // To increase the count that will equal the index by 1.
      count++;
      // The new Node after the index.
      current = current.next;
    }
    // Initialize the above Node and site the next value to be the current.
    node.next = current;
    // Site the previous Node to be the next one.
    previous.next = node;

    // make the list size increase after adding a new Node.
    this.size++;
  }
}

module.exports = insertLinkedList;
