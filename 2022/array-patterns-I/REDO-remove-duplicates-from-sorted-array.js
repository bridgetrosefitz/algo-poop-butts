// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// // Attempted 220330
// No solution reached in 20mins

// Solution from research

const removeDuplicates = nums => {
  let indexOfNextUniqueNumber = 1

  for(let i; i < nums.length - 1; i++) {
    if(nums[i] !== nums[i + 1]) {
      nums[index] = nums[i+1]
      index++
    }
  }

  return nums
}