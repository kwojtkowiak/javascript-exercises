const sumAll = function(Num1,Num2) {
    if (!Number.isInteger(Num1) || !Number.isInteger(Num2)) return "ERROR";
    if (Num1 < 0 || Num2 < 0) return "ERROR";
    if (Num1 > Num2) {
        const temp = Num1;
        Num1 = Num2;
        Num2 = temp;
      }
    
    let finalSum = 0;
    for (let i = Num1; i <= Num2; i++) {
        finalSum += i;
    }
    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
