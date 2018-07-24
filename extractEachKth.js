// Given array of integers, remove each kth element from it.

// Example

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
// extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

function extractEachKth(inputArray, k) {
  var kth = 1;
  for(var i = 0; i < inputArray.length; i++){
    if(kth != k){
      kth++;
    } else {
      inputArray.splice(i,1);
      i--;
      kth = 1;
    }
  }
  return inputArray;
}