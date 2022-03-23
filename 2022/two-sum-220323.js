// Inputs
// - array (integers); will always have at least 2 elements
// - target (integer)
// Outputs
// - Array of indices

// Notes
// - Exactly one solution
// - Cannot use the same element twice
// - Can return the answer in any order


const twoSum = function (nums, target) {
    const map = {}

    for (let i = 0; i < nums.length + 1; i++) {
      let diff = target - nums[i]
      let currentNumber = nums[i]
      if (diff in map) {
        return [i, map[diff]]
      } else {
        map[currentNumber] = i
      }
    }
  }