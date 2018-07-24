// Determine if the given character is a digit or not.

// Example

// For symbol = '0', the output should be
// isDigit(symbol) = true;
// For symbol = '-', the output should be
// isDigit(symbol) = false.

function isDigit(symbol) {
    return symbol.charCodeAt(0) >= 48 && symbol.charCodeAt(0) <= 57 ? true : false;
}
