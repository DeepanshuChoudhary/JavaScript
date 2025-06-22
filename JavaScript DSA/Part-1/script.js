"use strict";

let input = require("prompt-sync")();
let n = Number(input("Enter: "));

for(let i=1;i<=n;i++) {
    for(let j=1;j<=2*n-1;j++) {
        if(i==j || i+j==2*n) {
            process.stdout.write("* ");
        }
        else {
            process.stdout.write("  ");
        }
    }
    console.log();
}


// "use strict";

// let input = require("prompt-sync")();
// let n = Number(input("Enter: "));

// for(let i=1;i<=n;i++) {
//     for(let space=1;space<=n;space++) {
//         if(space==i) {
//             process.stdout.write("*");
//         }
//         else {
//             process.stdout.write(" ");
//         }
//     }
//     for(let j=1;j<=n-i;j++) {
//         if(j==n-i) {
//             process.stdout.write("*");
//         }
//         else {
//             process.stdout.write(" ");
//         }
//     }
//     console.log();
// }