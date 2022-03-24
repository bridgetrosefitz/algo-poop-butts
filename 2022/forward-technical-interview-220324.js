/*
Given a keyboard represented as a matrix and a word, return the shortest path that would spell out the word starting from the top left corner of the matrix.

Example:
Keyboard:
A B C D E F G
H I J K L M N
O P Q R S T U

Word: DART

Returns: 
[
    { vertical: 0, horizontal: 3 }, // path to D
    { vertical: 0, horizontal: -3 }, // path from D to A
    { vertical: 2, horizontal: 3 }, // path from A to R 
    { vertical: 0, horizontal: 2 }, // path from R to T
]

Keyboard:
a b c
d e f
g h i

Word
bad

Returns:
[
  { vertical: 0, horizontal: 1 }, // path to B
  { vertical: 0, horizontal: -1 }, // path from B to A
  { vertical: 1, horizontal: 0 }, // path from A to D 
]
*/



// Calculates the steps required to build a word.
// board: string[][] 
// [ ['A', 'B', 'C'], ['D',....] ]
// word: string
// return: { vertical: number, horizontal: number }[]

// Pseudocode

// For each letter
// currentLetter
// destinationLetter
// DONE Which sub array is destinationLetter in?
// DONE Which index is letter at in subarray
// Return difference between current subarray and desination sub array
// Return difference between current index in horizontal array  

function calculateWordJourney(board, word) {
  // for (const letter of word) {
  for (let letter of word) {
    let subArrayToSearch
    board.forEach((subArray, index) => {
      if (subArray.includes(letter)) {
        subArrayToSearch = index
      } else return
    })
    const indexOfLetterInSubArray = board[subArrayToSearch].indexOf(letter)
    // console.log('letter', letter)
    // console.log('array', array)
    // console.log('indexOfLetterInSubArray', indexOfLetterInSubArray)
  }

  return [];
}





///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// Test Cases
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

let testCase = 1;
const b1 = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
];

printExpectation(
  b1,
  'bad',
  [
    { vertical: 0, horizontal: 1 },
    { vertical: 0, horizontal: -1 },
    { vertical: 1, horizontal: 0 },
  ],
  calculateWordJourney(b1, 'bad'),
);

printExpectation(
  b1,
  'age',
  [
    { vertical: 0, horizontal: 0 },
    { vertical: 2, horizontal: 0 },
    { vertical: -1, horizontal: 1 },
  ],
  calculateWordJourney(b1, 'age'),
);

printExpectation(b1, '', [], calculateWordJourney(b1, ''));

printExpectation([], '', [], calculateWordJourney(b1, ''));

// printExpectation(b1, 'back', [], calculateWordJourney(b1, 'back'));

function printExpectation(board, word, expected, actual) {
  console.log(`Test ${testCase}`);
  console.log('\n');
  console.log(word);
  printBoard(board);
  console.log('\n');
  console.log('expected', expected);
  console.log('actual', actual);
  console.log('\n');
  testCase += 1;
}

function printBoard(board) {
  board.forEach((row) => console.log(row));
}
