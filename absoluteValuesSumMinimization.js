// Given a sorted array of integers a, find an integer x from a such that the value of

// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// is the smallest possible (here abs denotes the absolute value).
// If there are several possible answers, output the smallest one.

// Example

// For a = [2, 4, 7], the output should be
// absoluteValuesSumMinimization(a) = 4.

function absoluteValuesSumMinimization(a) {
    var result;
    var currentSum = 0;
    var lowest = null;
    for(var i = 0; i < a.length; i++){
        for(var j = 0; j < a.length; j++){
             currentSum += Math.abs(a[j]-a[i]);
        }
             if(lowest === null || currentSum < lowest){
               lowest = currentSum;
               result = a[i];
             }
             currentSum = 0;
    }
    return result;
}