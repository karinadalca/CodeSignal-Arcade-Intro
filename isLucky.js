// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

function isLucky(n) {
  n = n.toString().split('');
  var firstHalf = 0;
  var secondHalf = 0;

  for(i = 0; i < n.length; i++) {
    if(i<n.length/2){
      firstHalf = firstHalf + parseInt(n[i]);
    } else {
      secondHalf = secondHalf + parseInt(n[i]);
    }
  }

  return firstHalf == secondHalf;
}