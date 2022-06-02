// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Attempted 220602

// e.g. [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

// Create k and make it equal to 1
// Create currentHighest, and make it equal to nums[0]
// Create endPointer and make it equal to nums.length - 1
// Create leftPointer and make it 0
// Create rightPointer and make it 1

// [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
//  |  |                       |
 
//  k = 1
//  currentHighest = 0

// If value at currentHighest is equal to or more than the value at endPointer, return k

// If the value at rightPointer === the value of currentHighest: 
// >> swap the value at the rightPointer with the value at the endPointer

// Else:
// If the value at rightPointer < the value at leftPointer:
// >> swap the value at the rightPointer with the value at leftPointer
// >> increment k

// Increment rightPointer
// Increment leftPointer

// [0, 4, 1, 1, 1, 2, 2, 3, 3, 0]
//     |  |                 | 

// [0, 1, 4, 1, 1, 2, 2, 3, 3, 0]
//        |  |              |








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