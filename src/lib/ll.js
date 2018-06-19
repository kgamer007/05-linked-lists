'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  }

  insertAtEnd(value) {
    const node = new Node(value);
    if (!this.head) { // if this doesn't have a head
      this.head = node; // then make this the new head
      return this; // bring back the whole list
    }

    let currentNode = this.head; 
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }

  find(value) {
    if (!this.head) {
      throw new Error('The linked list is empty');
    }

    if (this.head.value === value) {
      return this.head;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  map(callback) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;

    while (currentNode) {
      currentNode.value = callback(currentNode.value);
      currentNode = currentNode.next;
    }

    return this;
  }
  pop() {
    let currentNode = this.head;
    if (!this.head) {
      return null;
    }
    if (!currentNode.next) {
      currentNode = null;
      return currentNode;
    }
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
        return null;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  remove(value) {
    if (!this.head) {
      return null;
    }

    if (this === value) {
      delete this.value;
    } return null;
  }
};
