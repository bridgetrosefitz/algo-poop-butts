var isPalindrome = function(head){
  
  // create an array to copy values in all sequential linkedlist nodes
  let arrayOfValues = []

  while(head !== null){
    arrayOfValues.push(head.val)
    head = head.next
  }

  // check if the array is a palindrome
}