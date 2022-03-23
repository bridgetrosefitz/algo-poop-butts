
// Inputs
// - array (integers)

// Output
// - an array of arrays (each array contains the integers themselves, not the indexes)

// Objective
// - Find three integers that sum to 0
// - Find as many of these as possible

// Constraints
// - all the integers have to be different elements in the original array
// - Only return multiple arrays if they each contain different i-j-k elements different from each other
// Numbers can be negative and positive

// Questions
// - Will there always be a solution? Assume no. Return []
// Are they ordered? No
// Can there be duplicate numbers in the input? Yes
// Does duplicate mean the index can't be the same, or the numbers can't be the same? I think it is the former given the definition of a triplet

// Example

// [-1,0,1,2,-1,-4]

// [-1,1,0] [-1,1,2]

// map = {
//   -1 : {-1: 0, 0: 1},
//   1  : ,
//   3  : ,
//   -2 : ,
//   -5 : 
//   }

// Pseudo code

// Create map
// Create results = []
// Create a currentSum variable
// Put that sum as the key in the map, with a nested object, with key=number at i, and value=i for the two numbers that make the sum
// Make numberImLookingForInMap: 0 - nums[i]
// If numberImLookingForInMap in map, push an array with numberImLookingForInMap, and the two keys of the object in numberImLookingForInMap

[-1, 0, 1, 2, -1, -4]


const threeSum = function (nums) {
  const mapOfSums = {}
  const mapOfNumsSeen = {}
  const results = []
  let currentSum
  let leftPointer = 0
  let rightPointer = 1
  let diff

  while (leftPointer < nums.length) {
    mapOfNumsSeen[nums[leftPointer]] = leftPointer
    while (rightPointer < nums.length) {
      currentSum = nums[leftPointer] + nums[rightPointer]
      diff = 0 - currentSum
      if (mapOfNumsSeen[diff]) {
        const arrayOfIndexesFromMapOfSums = mapOfSums[diff]
        const tripletIndexes = [...arrayOfIndexesFromMapOfSums, rightPointer]
        const tripletNumbers = tripletIndexes.map(index => nums[index])
        results.push(tripletNumbers)
      } else {
        mapOfSums[currentSum] = [leftPointer, rightPointer]
        mapOfNumsSeen[nums[rightPointer]] = rightPointer
        rightPointer++
      }
      // console.log('mapOfSums', mapOfSums)
      console.log('mapOfNumsSeen', mapOfNumsSeen)
    }
    leftPointer++
  }
  // Problem...if I've already seen a number, or a sum...it will override the value in my object
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
