// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

// Given an integer, find its digit degree.

// Example

// For n = 5, the output should be
// digitDegree(n) = 0;
// For n = 100, the output should be
// digitDegree(n) = 1.
// 1 + 0 + 0 = 1.
// For n = 91, the output should be
// digitDegree(n) = 2.
// 9 + 1 = 10 -> 1 + 0 = 1.

function digitDegree(n) {
  function finalDigit(sum, num){
    var currentSum = 0;
    sum = sum.toString().split('');
    if(sum.length > 1){
      for(var i = 0; i < sum.length; i++){
        currentSum += parseInt(sum[i]);
      }
      num++;
      return finalDigit(currentSum, num);
    }
    return num;
  }
  var num = 0;
  return finalDigit(n, num);
}