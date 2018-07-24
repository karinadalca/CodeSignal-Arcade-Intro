// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:


// Example

// For bishop = "a1" and pawn = "c3", the output should be
// bishopAndPawn(bishop, pawn) = true.

// For bishop = "h1" and pawn = "h3", the output should be
// bishopAndPawn(bishop, pawn) = false.

function bishopAndPawn(bishop, pawn) {
    function subNum(num) {
      var alphabet = ['a','b','c','d','e','f','g','h'];

      return parseInt(alphabet.indexOf(num.split('')[0])+1) >= parseInt(num.split('')[1]) ? parseInt(alphabet.indexOf(num.split('')[0])+1)-parseInt(num.split('')[1]) : parseInt(num.split('')[1])-parseInt(alphabet.indexOf(num.split('')[0])+1);
    }
    
    function addNum(num) {
      var alphabet = ['a','b','c','d','e','f','g','h'];

      return parseInt(alphabet.indexOf(num.split('')[0])+1)+parseInt(num.split('')[1]);
    }
    var bishopSub = subNum(bishop);
    var bishopAdd = addNum(bishop);
    var pawnSub = subNum(pawn);
    var pawnAdd = addNum(pawn);
    
    return bishopSub == pawnSub || bishopAdd == pawnAdd;
}