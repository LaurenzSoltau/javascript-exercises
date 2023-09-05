const repeatString = function(string, rounds) {
    if (rounds < 0) return "ERROR"
    returnString = "";
    for (let i = rounds; i > 0; i--) {
        returnString += string;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
