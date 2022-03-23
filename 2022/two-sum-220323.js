// Inputs
// - array (integers); will always have at least 2 elements
// - target (integer)

// Outputs
// - Array of indices

// Objective
// - Find two indices that SUM to the TARGET

// Constraints
// - Exactly one solution
// - Cannot use the same element twice
// - Can return the answer in any order

// Observations
// - Duplication because I've already seen a bunch of numbers I iterate over
// - Therefore, it would be better to save a set of numbers that I've stored

// Pseudo code

// - Iterate through the array
// - Store each number that I've seen an a map
// - For each new number, see what number I would need to hit the target (difference)
// - See if that number is in the map

// Example - brute force

// [3,2,4], 6
// |  |
// |    |
//    | |   
   
// [4,10,1000,2,9,1], 1001
//  |  |
//  |.     |
//  |         |
//  |           |
//  |              |
//    |.   |
//    |.      |
//    etc
//         |. |
//         |.   |
//         |.      |


const twoSum = function (nums, target) {
    const map = {}

    for (let i = 0; i < nums.length + 1; i++) {
      let diff = target - nums[i]
      let currentNumber = nums[i]
      if (diff in map) {
        // Note! Can also do map[diff]
        return [i, map[diff]]
      } else {
        map[currentNumber] = i
      }
    }
  }