// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Attempted 220602
// No solution reached in 20mins

// Solution from research https://www.youtube.com/watch?v=rlfsnRY0S9k&ab_channel=TerribleWhiteboard
// Accepted:
// Runtime: 84 ms, faster than 78.62 % of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 44.6 MB, less than 74.06 % of JavaScript online submissions for Remove Duplicates from Sorted Array.

const removeDuplicates = function(nums) {

  let leftPointer = 0
  let rightPointer = 1

  while (rightPointer < nums.length) {
    if (nums[rightPointer] !== nums[leftPointer]) {
      nums[leftPointer + 1] = nums[rightPointer]
      leftPointer++
    }
    rightPointer++
  }

  return leftPointer + 1

}



// Attempted 220330
// No solution reached in 20mins

// Solution from research

// const removeDuplicates = nums => {
//   let indexOfNextUniqueNumber = 1

//   for(let i; i < nums.length - 1; i++) {
//     if(nums[i] !== nums[i + 1]) {
//       nums[index] = nums[i+1]
//       index++
//     }
//   }

//   return nums
// }