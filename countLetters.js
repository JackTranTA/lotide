const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    if (letter === ' ') {
      continue;
    }
    if (!results[letter]) {
      results[letter] = 1;
    } else {
      results[letter]++;
    }
  }
  return results;
};

const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["e"], 3);