const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const output = {};
  for (const letter of string) {
    if (letter === ' ') {
      continue;
    }
    if (!output[letter]) {
      output[letter] = 1;
    } else {
      output[letter]++;
    }
  }
  return output;
};

const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["e"], 3);