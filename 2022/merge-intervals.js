const _ = require('lodash');

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Inputs
// - An array of arrays, each of length == 2
// - No negative numbers

// Outputs
// - An array of arrays, each of length == 2

// Questions
// - Can intervals (input) be length == 1? Or length == 0? It can be length 1, but not 0
// - Are they sorted? I'm going to assume yes

// Example
// [[1,4],[4,5]]
//     |.  |

// Pseudocode

// Loop through intervals array
// Define arrayToBeReturned
// Define pointers at left and right arrays to compare in intervals
// Check index 1 of left array, and index 0 of right array
// If the former is same or equal to the latter, check index 0 of the next array, and keep going...until you push a new array into arrayToBeReturned; else, push left array into the array to be returned

// *Pausing this approach because I think pointers is fewer operations

// const merge = intervals => {
//   const arrayToBeReturned = []
//   intervals.forEach((array, index) => {
//     if (array[1] >= intervals[index + 1][0]) {
//       if(array[1] >=)
//     }
//   })
// }

const merge = intervals => {
  const arrayToBeReturned = []
  let leftPointer = 0
  let rightPointer = 1
  let firstItemInInterval = intervals[0][0]
  let secondItemInInterval

  while (rightPointer < intervals.length) {
    if (intervals[leftPointer][1] >= intervals[rightPointer][0]) {
      rightPointer++
    }

    console.log('rightPointer', rightPointer)

    secondItemInInterval = intervals[rightPointer - 1][1]
    leftPointer = rightPointer
    rightPointer++

  }
  arrayToBeReturned.push([firstItemInInterval, secondItemInInterval])
  return arrayToBeReturned

}

// console.log(merge([[1,4],[4,5]]))

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))

// console.log(merge([[1,10],[2,6],[8,10],[15,18]]))