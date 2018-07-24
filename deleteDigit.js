// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example

// For n = 152, the output should be
// deleteDigit(n) = 52;
// For n = 1001, the output should be
// deleteDigit(n) = 101.

function deleteDigit(n) {
  n = n.toString();
  var largestNum = 0;

  for(var i = 0; i < n.length; i++){
    var string;
    if(i == 0){
      string = n.substring(1,n.length);
      largestNum = largestNum;
    } else {
      string = n.substring(0,i)+n.substring(i+1);
    }
    if(parseInt(string)>largestNum){
      largestNum = parseInt(string);
    }
  }
  return largestNum;
}