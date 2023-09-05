const removeFromArray = function(array, removeValue) {
    const args = Array.from(arguments);
    const removeValues = args.slice(1);
    let returnArray = [];

    for (let value of array) {
        if (!removeValues.includes(value)) {
            returnArray.push(value);
        }
    }
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
