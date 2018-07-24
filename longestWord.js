// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

// Example

// For text = "Ready, steady, go!", the output should be
// longestWord(text) = "steady".

function longestWord(text) {
  var words = [];
  var currentWord = '';
  var currentLength = 0;
  var maxLength = 0; 
  var maxWord = '';

  if (text == '') {
    return '';
  }

  for(var i = 0; i < text.length; i++){
    if(text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90 || text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122){
      currentWord = currentWord + text[i];
      currentLength++;
      if(i == text.length-1){
        words.push(currentWord);
      }
    } else if (currentWord.length > 0) {
      words.push(currentWord);

      if(maxLength < currentLength){
        maxLength = currentLength;
        maxWord = currentWord;
      }

      currentWord = '';
      currentLength = 0;
      
    } else {
      currentWord = '';
      currentLength = 0;
    }
  }

  for(var j = 0; j < words.length; j++){
    if(maxLength < words[j].length){
        maxLength = words[j].length;
        maxWord = words[j];
      } 
  }
  //return words.length > 1 ? maxWord : words[0];
  return maxWord;
}