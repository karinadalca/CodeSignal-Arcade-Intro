// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be

// minesweeper(matrix) = [[1, 2, 1],
//                        [2, 1, 1],
//                        [1, 1, 1]]

function minesweeper(matrix) {
    var results = [];
    for(var i = 0; i < matrix.length; i++){
        var line = [];
        for(var j = 0; j < matrix[0].length; j++){
            var numMine = 0;
            if(matrix[i+1]) {
                if((matrix[i+1][j-1]) === true){
                numMine++;
                }
                if((matrix[i+1][j]) === true){
                numMine++;
                }
                if((matrix[i+1][j+1]) === true){
                numMine++;
                }
            }
            
            if((matrix[i][j-1]) === true){
                numMine++;
            }
            
            if((matrix[i][j+1]) === true){
                numMine++;
            }
            
            if(matrix[i-1]){
               if((matrix[i-1][j-1]) === true){
                numMine++;
                }
                if((matrix[i-1][j]) === true){
                    numMine++;
                }
                if((matrix[i-1][j+1]) === true){
                    numMine++;
                } 
            }
            line.push(numMine);
        }
        results.push(line);
    }
    return results
}