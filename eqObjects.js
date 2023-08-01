const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

// Test cases
// Primitives as value
const car1 = { color: "black", wheels: 4 };
const car2 = { wheels: 4, color: "black" };
console.log(eqObjects(car1 , car2)); // => true

const car3= { size: "medium", color: "black", wheel: 4 };
console.log(eqObjects(car1 , car3)); // => false

// Array as value
const car4 = { color: ["black", "red"], wheels: 4 };
const car5 = { wheels: 4, color: ["black", "red"] };
console.log(eqObjects(car4 , car5)); // => true

const car6= { size: "medium", color: ["blue"], wheel: 4 };
console.log(eqObjects(car4 , car6)); // => false

// Object as value
const car7 = { color: {convertible : "red"}, wheels: 4 };
const car8 = { wheels: 4, color: {convertible : "red"} };
console.log(eqObjects(car7 , car8)); // => true

const car9= { size: "medium", color: {convertible : "blue"}, wheel: 4 };
console.log(eqObjects(car7 , car9)); // => false