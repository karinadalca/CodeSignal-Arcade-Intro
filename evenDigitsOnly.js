// Check if all digits of the given integer are even.

// Example

// For n = 248622, the output should be
// evenDigitsOnly(n) = true;
// For n = 642386, the output should be
// evenDigitsOnly(n) = false.

function evenDigitsOnly(n) {
    var string = n.toString().split('');
    for(var i = 0; i<string.length; i++){
      if(parseInt(string[i])%2 == 1){
        return false;
      }
    }
    return true;
}