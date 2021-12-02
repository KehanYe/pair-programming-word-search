// rows = letters.length
// coloumns = letter[0].length;

// PSEUDO CODE:
// 1. rows = loop through each row, join seperate letters to form word, if word is found return true
// 2. use matrix function from previous pair programming assignemnt, to turn coloumns into rows
// 3. coloumns = use provided function but this time use it on the new matrix (that's been provided from matrix function) that allows us to loop through rows (which will have the values of the coloumns)

const wordSearch = (letters, word) => {
  
  const transpose = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
  
    const matrixTrans = [];
  
    for (let i = 0; i < cols; i++) {
      matrixTrans[i] = Array(rows);
    }
  
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        matrixTrans[i][j] = matrix[j][i];
      }
    }
    return matrixTrans;
  };

  const verticalJoin = transpose(letters).map(ls => ls.join('')); // using .map function to create new array taking
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  for (j of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};
  
  
module.exports = wordSearch;