const repeatString = function(string, num) {
    let result = '';
    while (num > 0) {
        result += string;
        num--;
    }
    if (num < 0) {
        return 'ERROR';
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
