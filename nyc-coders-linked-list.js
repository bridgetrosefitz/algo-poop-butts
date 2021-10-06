// https://replit.com/@osha5223/FTM#index.js

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return value;
  }

  search(value) {
    let currentNode = this.head
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode
      } else {
        currentNode = currentNode.next
      }
    }
    return null
  }

  insert(index, value) {
    let counter = 0
    let currentNode = this.head
    while (counter < index) {
      //what if we need to add at index 0
      // maybe this would happen before entering the while loop
      if (counter !== index) {
        counter++
        currentNode = this.head.next
      } else {
        const newNode = new Node()
        newNode.value = value
        newNode.next = currentNode.next
        currentNode.next = newNode
      }
    }
    return
  }

  insert2(index, value) {
    if (index < 0) return false; // edge case 1
    if (index >= this.length) { // edge case 2
      this.add(value)
      return true
    }
    if (index === 0) { // edge case 3
      this.addAtHead(value)
      return true
    }
    const newNode = new Node(value)
    const leader = this.getNodeAtIndex(index - 1)
    const nextNode = leader.next
    leader.next = newNode
    newNode.next = nextNode

    this.length += 1
    return true
  }

  getNodeAtIndex(i) {
    let currentIndex = 0
    let currentNode = this.head
    while (currentIndex !== i) {
      currentNode = currentNode.next
      currentIndex += 1
    }
    return currentNode
  }

  addAtHead(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length += 1
  }
}

const newList = new LinkedList()
newList.add(1)
newList.add(2)
newList.add(3)
// console.log(newList)
// newList.search(2)
// newList.head.next

// newList.insert(2, "OshaBridgetHere")