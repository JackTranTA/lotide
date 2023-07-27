const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3); 