"use strict";

let enterPrompt = require("prompt-sync")();
let value = Number(enterPrompt("Enter the value: "));

for(let i=1;i<=value;i++) {
    let spaceDiff = value-i;
    for(let space=0;space<spaceDiff;space++) {
        process.stdout.write(" ");
    }
    for(let j=0;j<i;j++) {
        process.stdout.write("*");
    }
    console.log();
}


// "use strict";

// let enterPrompt = require('prompt-sync')();
// let value = Number(enterPrompt("Enter the Value:- "))

// for(let i=value;i>0;i--) {
//     for(let j=0;j<i;j++) {
//         process.stdout.write("*");
//     }
//     console.log("");
// }