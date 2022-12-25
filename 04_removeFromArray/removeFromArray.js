const removeFromArray = function() {
    const array = arguments[0];
    const removeArgs = Array.from(arguments).slice(1);
    const isBlocked = block(removeArgs);

    return array.filter(isBlocked);
};

const block = function(blackArray) {
    return (item) => {
      for (black of blackArray) {
        if (black === item) {
            return false;
        }
      }     
      return true;
    }
}


// Do not edit below this line
module.exports = removeFromArray;
