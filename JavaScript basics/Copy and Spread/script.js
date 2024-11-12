// 'use strict';

let arr1 = ["John", 202, true]; // Initialize `arr1` with a string, number, and boolean

// let arr2 = arr1; // (commented out) This would copy `arr1` as a reference, not a new array

// let arr2 = arr1.slice(0).concat(["Nishant"]); // Create a copy of `arr1` and add `"Nishant"` to the end

let arr2 = [...arr1]; // Create a shallow copy of `arr1` using the spread operator

// arr1.push("Deepanshu"); // Add `"Deepanshu"` to `arr1` only; `arr2` is unaffected

arr2.push("berg"); // Add `"berg"` only to `arr2`; this does not affect `arr1`

console.log(arr1); // Prints modified `arr1` with `"Deepanshu"`
console.log(arr2); // Prints `arr2`, which has `"Nishant"` but not `"Deepanshu"`
