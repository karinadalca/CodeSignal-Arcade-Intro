// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoidObstacles(inputArray) = 4.

function avoidObstacles(inputArray) {
  inputArray = inputArray.sort(function(a, b) {return a - b;});
  var hopLength = 0;
  for(var i = 1; i<inputArray[inputArray.length-1]; i++){
    var count = 0;
    for(var j = 0; j<inputArray.length; j++){
      if(inputArray[j]%i != 0){
        console.log(count, i);
        count++;
        if(count == inputArray.length){
          return i;
        }
      }
    }
  }
  return inputArray[inputArray.length-1]+1;
}