'use strict';

let array1 = ["Thomas","Chad","Neo","Nishant"];

// let item1 = array1[0];
// let item2 = array1[1];

// let [item1, item2, item3] = array1;
let [item1, item2, ...item3] = array1;

console.log(item1);
console.log(item2);
console.log(item3);