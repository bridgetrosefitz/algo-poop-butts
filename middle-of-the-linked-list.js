// https://leetcode.com/problems/middle-of-the-linked-list/

var middleNode = function (head) {
  // console.log(head)
  // console.log(head.next)
  // console.log(head.val)

  //     Make a variable for current
  //     Make a variable for counter
  //     Make a currentMiddle variable to keep track of the half way point of nodes we've iterated through
  //     Loop through the linkedlist until we reach a node where next is null
  //     Go through to 'next' node, and increment currentMiddle for every two nodes you've seen
  //     If counter is an even number, increment currentMiddle

  //     Return currentMiddle

  let counter = 0
  let current = head
  let currentMiddle = head

  while (current !== null) {
    current = current.next
    counter++
    if (counter % 2 === 0) {
      currentMiddle = currentMiddle.next
    }
  }

  return currentMiddle



};