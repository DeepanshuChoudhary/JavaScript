'use strict';

// map function doesn't change value in main array

const nums = [1,2,3,4,5,6,7,8,9,10];

const detailsMap = nums.map((num, index, array) => {
    return `Index ${index} : ${num} (From array ${array})`
})

console.log(detailsMap);
console.log(nums);

// square value of all element

const squareValue = nums.map(num => num * num);

console.log(squareValue);