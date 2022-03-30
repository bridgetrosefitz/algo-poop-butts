// https://leetcode.com/problems/sort-array-by-parity/
// Attempted 220330
// 18:20:50 to accepted solution
// Runtime: 122 ms, faster than 31.63% of JavaScript online submissions for Sort Array By Parity.
// Memory Usage: 44.6 MB, less than 58.46 % of JavaScript online submissions for Sort Array By Parity.

var sortArrayByParity = function (nums) {
  const lengthOfEventualArray = nums.length
  const resultsArray = new Array(lengthOfEventualArray)
  let indexForNextNumber = 0

  nums.forEach((number) => {
    if(number % 2 === 0) {
      resultsArray[indexForNextNumber] = number
      indexForNextNumber++
    }
  })

  nums.forEach((number) => {
    if(number % 2 !== 0 ) {
      resultsArray[indexForNextNumber] = number
      indexForNextNumber++
    }
  })

  return resultsArray

};

// nums = [3, 1, 2, 4]

// Memory performance = O(n)
// Runtime performance = O(2n) ~= O(n)