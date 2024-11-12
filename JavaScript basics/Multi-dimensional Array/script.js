'use strict';

let arr = [

    ["John", 30], ["Thomas", 28], ["Robert", 22]
];

// console.log(arr);
// console.log(arr[2]);
// console.log(arr[1][0]); // print "Thomas"

// for(let i=0; i<arr.length;i++) {
//     for(let j=0; j<arr[i].length;j++) {
//         // console.log(arr[i]);
//         console.log(arr[i][j]);
//     }
// }

// for loop = forEach
console.log("forEach");

// Using forEach to iterate over each sub-array in `arr`
// `forEach` applies the callback function to each element in `arr`, which are sub-arrays like ["John", 30]

arr.forEach(arrayData => {
    
    // `arrayData` here is each sub-array in `arr` (e.g., ["John", 30])
    // Now we use `forEach` again to access each element inside the `arrayData` sub-array
    
    arrayData.forEach(arrayVal => {
        
        // `arrayVal` is each individual element inside `arrayData`
        // For example, when `arrayData` is ["John", 30], `arrayVal` will be "John" on the first pass
        // and then `30` on the next pass
        console.log(arrayVal); // Prints each individual value within the sub-arrays
    });
});

// The `forEach` loops result in the following output:
// "John", "30", "Thomas", "28", "Robert", "22"
// Each element is printed on a new line



// for in for of print array
console.log("for-in for-of");

// Using a `for...of` loop to iterate over each sub-array in `arr`
// `for...of` gives each element of `arr` directly, so `ar` represents each sub-array in `arr`

for (let ar of arr) {
    
    // `ar` here is each sub-array within `arr` (e.g., ["John", 30], ["Thomas", 28])
    // Now we use another `for...of` loop to go through each element within `ar`
    
    for (let i of ar) {
        
        // `i` represents each individual value inside `ar`
        // For example, when `ar` is ["John", 30], `i` will be "John" on the first pass,
        // and then `30` on the next pass
        console.log(i); // Prints each individual value within the sub-arrays
    }
}

// The `for...of` loops result in the following output:
// "John", "30", "Thomas", "28", "Robert", "22"
// Each element is printed on a new line