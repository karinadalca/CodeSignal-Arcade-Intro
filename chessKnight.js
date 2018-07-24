// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

// Example

// For cell = "a1", the output should be
// chessKnight(cell) = 2.

// For cell = "c2", the output should be
// chessKnight(cell) = 6.

function chessKnight(cell) {
  var moves = 0;
  var alphabet = ['a','b','c','d','e','f','g','h'];
  var char1 = alphabet.indexOf(cell[0])+1;
  var char2 = parseInt(cell[1]);
  
  if(char1-2 > 0 && char2-1 > 0){
    console.log('1');
    moves++;
  }
  if(char1-2 > 0 && char2+1 < 9){
    console.log('2');
    moves++;
  }
  if(char1+2 < 9 && char2-1 > 0){
    console.log('3');
    moves++;
  }
  if(char1+2 < 9 && char2+1 < 9){
    console.log('4');
    moves++;
  }
  if(char2-2 > 0 && char1-1 > 0){
    console.log('5');
    moves++;
  }
  if(char2-2 > 0 && char1+1 < 9){
    console.log('6');
    moves++;
  }
  if(char2+2 < 9 && char1-1 > 0){
    console.log('7');
    moves++;
  }
  if(char2+2 < 9 && char1+1 < 9){
    console.log('8');
    moves++;
  }
  return moves;
}