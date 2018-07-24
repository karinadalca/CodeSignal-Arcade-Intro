// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// arrayMaxConsecutiveSum(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:

// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8.

function arrayMaxConsecutiveSum(inputArray, k) {
  var maxSum = 0;
  var currentSum = 0;
  for(var i = 0; i < inputArray.length; i++){
    if(i == 0){
      for(var j = 0; j < k; j++){
        currentSum += inputArray[i+j];
      }
      maxSum = currentSum;
    }
    if(i+k < inputArray.length) {
      currentSum = (currentSum - inputArray[i])+ inputArray[i+k];
      if(currentSum>maxSum){
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}