// Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.

function lineEncoding(s) {
  var num = 1;
  var currentChar = s[0];
  var ansStr = '';
  for(var i = 1; i <= s.length; i++){
    if(s[i] == currentChar){
      num = num+1;
    } else {
      if(num<2){
        ansStr = ansStr+currentChar;
      } else {
        ansStr = ansStr+num+currentChar;
      }
      num = 1;
      currentChar = s[i];
    }
  }
  return ansStr;
}