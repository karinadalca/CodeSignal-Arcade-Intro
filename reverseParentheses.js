// You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.

// Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.

// Example

// For string s = "a(bc)de", the output should be
// reverseParentheses(s) = "acbde".

function reverseParentheses(s) {
  var closingIndex, openingIndex, substring, rearranged;

  if(s.indexOf(')') !== -1){
    closingIndex = s.indexOf(')')
    openingIndex = s.lastIndexOf('(', closingIndex);
    substring = s.substring(openingIndex+1, closingIndex).split('').reverse().join('');
    rearranged = s.slice(0, openingIndex) + substring + s.slice(closingIndex +1);
    return reverseParentheses(rearranged);
  } else {
    return s;
  }
}