// Given a string, find the number of different characters in it.

// Example

// For s = "cabca", the output should be
// differentSymbolsNaive(s) = 3.

// There are 3 different characters a, b and c.

function differentSymbolsNaive(s) {
  s = s.split('').sort();
  var char = s[0];
  var num = 1;
  for(var i = 1; i < s.length; i++){
    if(s[i] != char){
      char = s[i];
      num++;
    }
  }
  return num;
}