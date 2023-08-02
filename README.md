# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @turnipboy/lotide`

**Require it:**

`const _ = require('@turnipboy/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: assert whether two arrays are equal.
* `assertEqual(actual, expected)`: assert whether two primitive variables are equal.
* `assertObjectsEqual(object1, object2)`: assert whether two objects are equal.
* `countLetters(string)`: count and return the number of letters in a string.
* `countOnly(allItems, itemsToCount)`: takes an array of elements and an object of elements with value true if needed to be counted in the array, returns object with elements counted and count as value. 
* `eqArrays(array1, array2)`: check to see if two arrays are equal in length and values, returns boolean.
* `eqObjects(object1, object2)`: check to see if two objects are equal in length and values, returns boolean.
* `findKey(object, callback)`: takes in an object and a callback function that gives the value to be found, returns the first property with the value, otherwise return undefined.
* `findKeyByValue(object, value)`: takes an object and the value to be found, returns the first property with the value, otherwise return undefined.
* `letterPositions(string)`: takes a string and returns an object with properties being all the letter in the string with an array of positions they appear at as the value.
* `map(array, callback)`: takes an array and a callback function, the operation in the callback will be done to the array and stored in a new array, returns a new modified array. 
* `takeUntil(array, callback)`: takes an array and a callback function, add elements of the array into a new array as long as the condition in the callback is true, returns a new modified array.   
* `without(array1, array2)`: takes two arrays and return an array that has all elemnts in the first array minus elements in the second array.
* `head(array)`: returns the head of an array.
* `tail(array)`: returns the tail of an array.
* `middle(array)`: returns the middle of an array.
