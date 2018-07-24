// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

function palindromeRearranging(inputString) {
    var count = 0;
    inputString = inputString.split('').sort();
    for(var i = 0; i<inputString.length; i++){
        if(inputString[i] == inputString[i+1]){
            i++;
        } else {
            count++
        }
    }
    console.log(count);
    return count <= 1;
}
