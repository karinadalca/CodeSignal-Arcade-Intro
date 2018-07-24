// Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

// Example

// For

// matrix = [[1, 2, 1],
//           [2, 2, 2],
//           [2, 2, 2],
//           [1, 2, 3],
//           [2, 2, 1]]
// the output should be
// differentSquares(matrix) = 6.

// Here are all 6 different 2 × 2 squares:

// 1 2
// 2 2
// 2 1
// 2 2
// 2 2
// 2 2
// 2 2
// 1 2
// 2 2
// 2 3
// 2 3
// 2 1

function differentSquares(matrix) {
  var arr = [];

  function isUnique(inputArray, compareArray){
    for(var i = 0 ; i < compareArray.length; i++){
        if(compareArray[i][0] == inputArray[0] && compareArray[i][1] == inputArray[1] && compareArray[i][2] == inputArray[2] && compareArray[i][3] == inputArray[3] ){
          return false;
        }
    }
    return true;
  }

  for(var i = 0; i < matrix.length-1; i++){
    var currentFour = [];
    for(var j = 0; j < matrix[i].length-1; j++){
      var currentFour = [matrix[i][j], matrix[i+1][j], matrix[i][j+1], matrix[i+1][j+1]];
      if(isUnique(currentFour, arr)){
        arr.push(currentFour);
      }
    }
  }
  return arr.length;
}