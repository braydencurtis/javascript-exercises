const sumAll = function(int1, int2) {
    const sorted = [int1, int2];
    sorted.sort(function(a,b){return a-b});
    let sum = 0;
    for (i = sorted[0]; i <= sorted[1]; i++) {
        sum = sum + i;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
