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


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (key in object1) {
    if (Array.isArray(object1[key])) {
      if (!(eqArrays(object1[key], object2[key]))) {
        return false;
      }
    }
    if ((typeof object1[key] === 'object') && (typeof object2[key])) {
      if (!(eqObjects(object1[key], object2[key]))) {
          return false
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
    return true;
  }
  return false;
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`🔥🔥🔥Assertion Passed: [${inspect(obj1)}] === [${inspect(obj2)}]`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: [${inspect(obj1)}] !== [${inspect(obj2)}]`);
  }
};

const car4 = { color: ["black", "red"], wheels: 4 };
const car5 = { wheels: 4, color: ["black", "red"] };
assertObjectsEqual(car4 , car5); 

const car6= { size: "medium", color: ["blue"], wheel: 4 };
assertObjectsEqual(car4 , car6); 