const reverseString = function(originalStr) {
  let destinationStr = '';
  for (char of originalStr) {
      destinationStr = char.concat(destinationStr);
  }
  return destinationStr;
};

// Do not edit below this line
module.exports = reverseString;
