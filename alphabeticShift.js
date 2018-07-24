// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be
// alphabeticShift(inputString) = "dsbaz".

function alphabeticShift(inputString) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    inputString = inputString.split('');
    for(var i = 0; i<inputString.length; i++){
        if(alphabet.indexOf(inputString[i]) == alphabet.length-1){
           inputString[i] = alphabet[0];
        } else {
           inputString[i] = alphabet[alphabet.indexOf(inputString[i])+1];
        }
    }
    return inputString.join('');
}
