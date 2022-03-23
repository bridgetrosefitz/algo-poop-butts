/**
 * @param {number[]} nums
 * @return {number}
 */

// Rephrase:
// Return a modified array, which takes an existing array, which contains duplicates, and removes those duplicates, returning only unique values

// Input(s)
// -- array of integers
// -- increasing order
// -- integer values will be greater than or equal to NEGATIVE 100, and smaller than or equal to 100
// -- there could be a very large number of elements in the array (10^4)
// QUESTIONS: May be a dynamic or non-dynamic array?
// QUESTIONS: Could the array contain empty slots, or other values like false or true, or just integers?
// QUESTIONS: Is it possible that the array will not contain duplicates?

// Outputs
// -- array
// -- must be the same length as input array
// -- must contain unique values only
// -- the values must be in the first locations of the array
// -- elements in latter locations may be any data type

// Other things
// -- Do not allocate extra space for memory


var removeDuplicates = function (nums) {

  let leftPointer = 0
  let rightPointer = leftPointer + 1
  let middlePointer = leftPointer + 1

  while (rightPointer < nums.length) {
    if (nums[leftPointer] !== nums[rightPointer]) {
      nums[middlePointer] = nums[rightPointer]
      leftPointer++
      middlePointer++
      rightPointer++
    } else {
      rightPointer++
    }
  }
  return middlePointer

};


