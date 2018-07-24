// Check if the given string is a correct time representation of the 24-hour clock.

// Example

// For time = "13:58", the output should be
// validTime(time) = true;
// For time = "25:51", the output should be
// validTime(time) = false;
// For time = "02:76", the output should be
// validTime(time) = false.

function validTime(time) {
  time = time.split(':');
  if(parseInt(time[0]) >= 0 && parseInt(time[0]) < 24 && parseInt(time[1]) >= 0 && parseInt(time[1]) < 60){
    return true;
  } else {
    return false;
  }
}