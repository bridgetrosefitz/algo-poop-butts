// Implementation of a queue class

// Create the node class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create the queue class

class Queue {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  enqueue(val) {
    // Create new node

    const node = new Node(val)

    // Append to tail if tail exists
    // This also updates the next reference for the head!

    if(this.tail !== null) {
      this.tail.next = node
    }

    // Update tail reference

    this.tail = node

    // Update head reference if it's empty

    if(this.head === null) {
      this.head = node
    }

    // Update size
    
    this.size++
  }

  dequeue() {
    // In dequeue, you are adding to the tail, and removing from the head

    // Return null if empty list

    if(this.head === null) return null

    // Store current head reference

    const temp = this.head

    // Update head reference

    this.head = temp.next

    // Update head if list is now empty

    if(this.head === null) {
      this.tail = null
    }

    // Remove old head reference

    temp.next = null

    // Update size

    this.size--

  }

  peek() {

  }

  isEmpty() {
    return this.size === 0
  }
}