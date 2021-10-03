// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

  //     STRING             >>     f     >>     INTEGER
  // - English letters                    - Length of substring
  // - Spaces
  // - Digits
  // - Symbols
  // - Can be length 0
  // - NOT Case sensitive
  // - Negative and positive integers treated as different


  // "PLEO" >> f >> 4
  // "Fitzgerald" >> f >> 10
  // "California" >> f >> 8

  //     Count total of string
  //     Increment total length of string as you move from the starting point
  //     - Define starting point
  //     - Define right pointer
  //     - Define variable for the total length
  //     Check if each new character has been mentioned before
  // - Add each new character to list
  //     If the new letter has been mentioned before, find where that letter was mentioned and move the           left pointer to the next index after that

  let lengthOfCurrentString = 0
  let lengthOfMaxString = 0
  let leftPointer = 0
  let rightPointer = 0
  let charactersSeenBefore = {}

  while (rightPointer < s.length - 1) {
    let currentCharacter = s[rightPointer]

    if (charactersSeenBefore[currentCharacter]) {
      charactersSeenBefore[currentCharacter] = rightPointer
      lengthOfCurrentString = 0
      leftPointer = rightPointer
      rightPointer++

    } else {
      // {...charactersSeenBefore, currentCharacter: rightPointer}
      charactersSeenBefore[currentCharacter] = rightPointer
      lengthOfCurrentString++
      lengthOfMaxString = Math.max(lengthOfMaxString, lengthOfCurrentString)
      console.log('lengthofMax', lengthOfMaxString)
      rightPointer++
    }

    console.log(charactersSeenBefore)
    console.log(lengthOfCurrentString)
  }


  return lengthOfMaxString

};


