// Given a string, output its longest prefix which contains only digits.

// Example

// For inputString="123aa1", the output should be
// longestDigitsPrefix(inputString) = "123".

function longestDigitsPrefix(inputString) {
  var currentString = '';
  var longestString = '';
  for(var i = 0; i < inputString.length; i++){
    if(inputString.charCodeAt(i) == 32){
      break;
    } else if(inputString.charCodeAt(i) >= 48 && inputString.charCodeAt(i) <= 57){
      currentString += inputString[i];
    } else {
      if(currentString.length>longestString.length){
        longestString = currentString;
      }
      currentString = '';
    }
  }
  return longestString.length >= currentString.length ? longestString : currentString;
}