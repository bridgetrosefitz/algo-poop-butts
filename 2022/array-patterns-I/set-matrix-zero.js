const setZeroes = (matrix) => {
  const rows = matrix.length
  const cols = matrix[0].length
  let rowZero = false

  // Determine which rows need to be zero

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {

      // When you find a zero...
      if (matrix[r][c] === 0) {
        // Make the top square of that column 0
        matrix[0][c] = 0
        // We have rowZero to track the first row (r = 0), so skip that
        if (r > 0) {
          // Make the left square of that row 0
          matrix[r][0] = 0
        } else {
          rowZero = true
        }
      }
    }
  }

  // Make the squares that need to be zero, zero


  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if ((r > 0 && c > 0) && (matrix[0][c] === 0 || matrix[r][0] === 0)) {
        matrix[r][c] = 0
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let r = 0; r < rows; r++) {
      matrix[r][0] = 0
    }
  }

  if (rowZero) {
    for (let c = 0; c < cols; c++) {
      matrix[0][c] = 0
    }
  }

}