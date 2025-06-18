"use strict";

let amount = Number(prompt("Enter the amount"));

if (amount >= 500) {
    console.log(`500- ${Math.trunc(amount / 500)}`);
    amount %= 500;
}

// let amount = Number(prompt("Enter the amount:"));

// if (isNaN(amount) || amount <= 0) {
//     console.log("Invalid input!");
// } else {
//     let notes = [500, 200, 100, 50, 20, 10, 5, 2, 1];

//     for (let note of notes) {
//         let count = Math.floor(amount / note);
//         if (count > 0) {
//             console.log(`The ${note} bills you received are - ${count}`);
//             amount = amount % note;
//         }
//     }99
// }
