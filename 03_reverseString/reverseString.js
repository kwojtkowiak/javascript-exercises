const reverseString = function(str) {
let splitString = str.split("")
let reversedStr = splitString.reverse();
let joinArray = reversedStr.join("")
return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
