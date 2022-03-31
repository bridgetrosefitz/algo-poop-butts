// https://leetcode.com/problems/squares-of-a-sorted-array/
// Attempted 220330
// No solution reached in 20mins

// Solution from https://www.youtube.com/watch?v=PN68qx-Qkdw&ab_channel=NickWhite
// e.g. nums = [-4,-1,0,3,10]

const sortedSquares = nums => {
  let lengthOfArray = nums.length
  let positivePointer = 0

  // Find where negative numbers end

  while(positivePointer < lengthOfArray && nums[positivePointer] < 0) {
    positivePointer++
  }

  // Set negative pointer at one before the positive pointer (which is the first element in nums that is 0 or a positive integer)

  let negativePointer = positivePointer - 1

  // Initiate new array and counter
  
  const sortedSquares = new Array(lengthOfArray)
  let counter = 0

  // Compare size of squares as the numbers get more negative and more positive respectively

  while(negativePointer >= 0 && positivePointer < lengthOfArray){
    if(nums[negativePointer] * nums[negativePointer] < nums[positivePointer] * nums[positivePointer]){
    sortedSquares[counter] = nums[negativePointer] * nums[negativePointer]
    negativePointer--
    } else {
    sortedSquares[counter] = nums[positivePointer] * nums[positivePointer]
    positivePointer++
    }

    counter++
  }

  while(negativePointer >= 0) {
    sortedSquares[counter] = nums[negativePointer] * nums[negativePointer]
    negativePointer--
    counter++
  }

  while(positivePointer <= lengthOfArray) {
    sortedSquares[counter] = nums[positivePointer] * nums[positivePointer]
    positivePointer++
    counter++
  }

  return sortedSquares

}

// There's a problem with this - it returns [0, 1, 9, 16, 100, 100, 400, NaN] for [-20,-10,-4,-1,0,3,10]
