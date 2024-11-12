'use strict';

let arr = [10, 20, 30, 40];

// Using a `for...in` loop to iterate over the indexes of `arr`
// `for...in` gives the index of each element in the array, not the value directly
for (let ar in arr) {
    console.log(ar);        // Prints each index in `arr` (0, 1, 2, 3)
    console.log(arr[ar]);   // Prints the value at each index (10, 20, 30, 40)
}


let arr2 = [500, 600, 700, 800];

// Using a `for...of` loop to iterate over the values in `arr2`
// `for...of` directly gives each element in the array, rather than the index
for (let ar2 of arr2) {
    console.log(ar2);      // Prints each value in `arr2` (500, 600, 700, 800)
}
