// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

function addBorder(picture) {
  var border = '';
  var length = picture[0].length+2;

  for(var j = 0; j<picture.length; j++){
    var added = '*'+picture[j]+'*';
    picture[j] = added;
  }

  for(var i = 0; i<length; i++){
    border += '*';
  }
  picture.splice(0,0,border);
  picture.push(border);
  return picture;
}
