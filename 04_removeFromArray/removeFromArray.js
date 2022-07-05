const removeFromArray = function(array, ...objectToRemove) {
    let i = 0
    while (i < array.length) {
      if (array[i] === objectToRemove.includes(array[i])) {
        array.splice(i,1);
    }
      else {
        i++;
      }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
