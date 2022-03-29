// More questions:

// 1. What is the Time Complexity (worst case)?
// A1: O(2n) ~= O(n) linear


// 2. What is the Space Complexity (worst case)?
// A2: O(26) ~= O(1) constant

const myFunction = s => {

  const map = {} // counter -> Map() and Set()

  for (let i = 0; i < s.length; i++) {
    // map[s[i]] = (map[s[i]] ?? 0) + 1

    const letter = s[i]

    if (!map[letter]) {
      map[letter] = 1
    } else {
      map[letter] = map[letter] + 1
    }
  }

  for (let i = 0; i < s.length; i++) {

    const letter = s[i]

    if (map[letter] == 1) {
      return i
    }
  }

  return -1

}

// Null coalesce
// O(mn)
// Quadratic / Cubic, factorial (worst possible), log(n) logarithmic
// Heap data structure
// study Map and Set

function myFunctionTester(input, expectedOutput) {
  output = myFunction(input)
  if (output == expectedOutput) {
    return "Pass"
  } else {
    return `Failed answer was ${output}`
  }
}


console.log(myFunctionTester("aabb", -1))
console.log(myFunctionTester("helloh", 1))
console.log(myFunctionTester("bridget", 0))
console.log(myFunctionTester("jesus", 0))
console.log(myFunctionTester("abcdefgabcdefgl", 14))