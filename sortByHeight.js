// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function sortByHeight(a) {
  var copyA = a.slice(0).sort(function(a, b) {return a - b;});
  var starting = 0;
  for(var i = 0; i < copyA.length; i++){
    if(copyA[i] == -1){
      starting++;
    }
  }

  for(var j = 0; j < a.length; j++){
    if(a[j]!== -1){
      a[j] = copyA[starting];
      starting++;
    }
  }
  return a;
}