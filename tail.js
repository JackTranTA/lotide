const tail = function(array) {
    if (array.length == 0) {
        return array;
    }
    let tail = [];
    for (var i = 1; i < array.length; i++) {
        tail.push(array[i]);
    }
    return tail;
};

module.exports = tail;