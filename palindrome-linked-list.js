var isPalindrome = function(head){
  
  // create an array to copy values in all sequential linkedlist nodes
  let arrayOfValues = []

  while(head !== null){
    arrayOfValues.push(head.val)
    head = head.next
  }

  let leftPointer = 0; rightPointer = arrayOfValues.length -1

  // check if the array is a palindrome

  while(leftPointer < rightPointer){
    if (arrayOfValues[leftPointer] !== arrayOfValues[rightPointer]){
      return false
    } else {
      leftPointer++;
      rightPointer--
    }
  }

  return true
}