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

const without = function(arr1, arr2) {
  const filtered = [];
  for (const i of arr1) {
    if (!arr2.includes(i)) {
      arr2.push(i);
    }
  }
  return filtered;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);