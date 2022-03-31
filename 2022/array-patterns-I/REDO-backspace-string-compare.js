// https://leetcode.com/problems/backspace-string-compare/

// Adapted from Leetcode solution tab
// Runtime: 122 ms, faster than 9.15% of JavaScript online submissions for Backspace String Compare.
// Memory Usage: 42.5 MB, less than 67.30 % of JavaScript online submissions for Backspace

const backSpaceCompare2 = function(s, t) {
  let sPointer = s.length - 1
  let tPointer = t.length - 1
  let sSkips = 0
  let tSkips = 0

  while(sPointer >= 0 || tPointer >= 0) {

    // Find the position of the next actual character in each string
    while(sPointer >= 0) {
      if(s[sPointer] === "#") {
        sSkips++; sPointer--
      } else if(sSkips > 0) {
        sSkips--
        sPointer--
      } else break // If skips are 0 and you don't have to add a ski because you're on a #, you've got your letter!
    }

    while(tPointer >= 0) {
      if(t[tPointer] === "#"){
        tSkips++
        tPointer--
      } else if(tSkips > 0) {
        tSkips--
        tPointer--
      } else break
    }

    // Return false if 2 actual characters are different

    if(sPointer >= 0 && tPointer >= 0 && s[sPointer] !== t[tPointer]) {
      return false
    }

    // Return false if, at 2 actual characters to compare, one of s or t is length === 0, and the other is not
  
    if ((sPointer >= 0) != (tPointer >= 0)) {
      return false
    }

    // Just good ol' decrement if all good so far, and test the next character from current sPointer and tPointer onwards
    sPointer--
    tPointer--
  }

  return true


}



// Attemped 220331
// Wrong answer submitted in 27:00:00

const backspaceCompare = function (s, t) {
  let sPointer = s.length - 1
  let tPointer = t.length - 1

  while (sPointer >= 0 && tPointer >= 0) {
    if (s[sPointer] === t[tPointer] && s[sPointer] !== "#") {
      sPointer--
      tPointer--
    } else if (s[sPointer] === "#") {
      sPointer = sPointer - 2
    } else if (t[tPointer] === "#") {
      tPointer = tPointer - 2
    } else return false
  }

  return true

};