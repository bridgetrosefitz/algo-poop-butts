// https://leetcode.com/problems/binary-search/
// Attempted 220330
// 27:29:58 to accepted solution
// Runtime: 72 ms, faster than 78.20% of JavaScript online submissions for Binary Search.
// Memory Usage: 44.9 MB, less than 75.42 % of JavaScript online submissions for Binary Search.

const search = function(nums, target) {
  let leftPointer = 0
  let rightPointer = nums.length - 1

  while(leftPointer <= rightPointer) {
    if (nums.length === 0) return // adding this badboy took me from faster than 78.2% of solutions to faster than 97.23% of solutions
    let midPointer = ((rightPointer + leftPointer) / 2)
    if (nums[midPointer] === target) {
      return midPointer
    } else if (nums[midPointer] < target) {
      leftPointer = midPointer + 1      
    } else {
      rightPointer = midPointer - 1
    }
  }
  return -1
}