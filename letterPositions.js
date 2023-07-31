const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for(let i = 0; i > arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🔥🔥🔥Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const letterPositions = function(sentence) {

  const results = {};
  var position = 0;
  for (const letter of sentence) {
    if (letter === ' ') {
      continue;
    }
    if (!results[letter]) {
      results[letter] = [];
    }
    results[letter].push(position);
    position++;
  }
  return results;
};

assertArraysEqual(letterPositions("hello").l, [2, 3]);