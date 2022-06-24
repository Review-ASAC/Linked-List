"use strict";

const Node = require("../node");

//
class LinkedList {
  // each Node will have two things (data,next).
  constructor() {
    // null = default data, that is mean if the list is empty and the is no head.
    this.head = null;
    // to track the size of the list, 0 is the initial index.
    this.size = 0;
  }

  // Insert first Node
  insertFirst(data) {
    try {
      // If the is any data in the head this will be pushed to the next head.
      // If the is no data in the head this will be pushed to be the first head.
      this.head = new Node(data, this.head);
      // make the list size increase after adding a new Node.
      this.size++;
    } catch (error) {
      // To catch the error in the inserting.
      console.error("Error in inserting data");
    }
  }

  // Insert last Node
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

  // Insert at index
  // To insert any Node between the current Nodes (between the index).
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

  // Get at index
  // To git the value of the index.
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
    // Remove first.
    if (index === 0) {
      this.head = current.next;
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

  // Clear the list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData() {
    // To represent current Node.
    let current = this.head;

    // To loop thru all the Nodes.
    while (current) {
      // To have the current data property.
      console.log(current.data);
      // To have the next data.
      current = current.next;
    }
    // printListData print the last Node to the first Node
  }
}

const ll = new LinkedList();
ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);
ll.insertLast(4);
// ll.insertAt(5, 2);
// ll.clearList();
// ll.getAt(8);
ll.removeAt(1);
ll.printListData();

// console.log(ll);

module.exports = LinkedList;
