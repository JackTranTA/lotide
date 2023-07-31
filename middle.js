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

const middle = function(arr) {
  const middle = [];
  if (arr.length < 3) {
    console.log(middle);
    return middle;
  }

  if (arr.length % 2 === 1) {
    middle.push(arr[(arr.length - 1) / 2]);
    console.log(middle);
    return middle;
  }

  middle.push(arr[arr.length / 2 - 1]);
  middle.push(arr[arr.length / 2]);
  console.log(middle);
  return middle;
};

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]