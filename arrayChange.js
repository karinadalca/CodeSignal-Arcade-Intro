// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.

function arrayChange(inputArray) {
  var lowest = inputArray[0];
  var count = 0;
    for (var i = 1; i<inputArray.length; i++){
      if(lowest >= inputArray[i]){
        count = count + ((lowest+1) - inputArray[i]);
        inputArray[i] += ((lowest+1) - inputArray[i]);
      }
      lowest = inputArray[i];
    }
    return count;
}