// Implementation of a stack class

// Create the node class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create the stack class

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(val) {
    // create a new node
    const node = new Node(val);
    // set new node's next reference to current head
    node.next = this.head;
    // update head reference to new node
    this.head = node;
    // update size
    this.size += 1;

    return this.size;
  }

  pop() {
    // return null if stack is empty
    if (this.head === null) return null;

    // save current head reference in temp variable
    const temp = this.head;
    // update head reference
    this.head = temp.next;
    // remove temp node's next reference
    temp.next = null;
    // update size;
    this.size--;

    return temp.value;
  }

  peek() {
    return this.head ? this.head.value : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

const myStack = new Stack();
myStack.push(1)
myStack.push(5)
myStack.pop() // returns 5
