'use strict';

const num = [1,2,3,4,5,6,7,8,9,10];

// num.forEach(num => console.log(num)); 

// Square value

// num.forEach((num) => {
//     let square = num * num;
//     console.log(square);
// })

// console.log(num);

let detailsEach = []; 

num.forEach((num) => {
    detailsEach.push(num * num); // push the square number in the "detailsEach" blank array
})

console.log(detailsEach);