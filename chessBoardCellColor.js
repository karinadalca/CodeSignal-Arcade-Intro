// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.

// For cell1 = "A1" and cell2 = "H3", the output should be
// chessBoardCellColor(cell1, cell2) = false.

function chessBoardCellColor(cell1, cell2) {
    cell1 = cell1.split('');
    cell2 = cell2.split('');
    var alphabets = ['A','B','C','D','E','F','G','H'];
    return (alphabets.indexOf(cell1[0])+1+parseInt(cell1[1]))%2 == (alphabets.indexOf(cell2[0])+1+parseInt(cell2[1]))%2;
}