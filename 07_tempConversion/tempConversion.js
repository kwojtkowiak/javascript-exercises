const ftoc = function(fTemp) {
  newCTemp = (fTemp - 32)/1.8;
  if (newCTemp !== 0) {
    return parseFloat(newCTemp.toFixed(1));
  } else 
  {return parseFloat(newCTemp);
  }
}

const ctof = function(cTemp) {
  newFTemp = cTemp*1.8+32;
  if (newFTemp !== 0) {
    return parseFloat(newFTemp.toFixed(1));
  } else 
  {return parseFloat(newFTemp);
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
