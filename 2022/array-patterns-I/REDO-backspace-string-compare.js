// https://leetcode.com/problems/backspace-string-compare/

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