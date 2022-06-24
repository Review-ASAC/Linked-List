"use strict";

// To represent each Node we have
class Node {
  // each Node will have two things (data,next)
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

module.exports = Node;
