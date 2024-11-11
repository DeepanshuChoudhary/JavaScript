'use strict';

function name(a) {

    // console.log("Hello World!! " + a);

    if (a) {
        console.log("Hello World!! " + a);
    } else {
        console.log("Hello World!!!")
    }
}

name("My name is Deepanshu Choudhary");
name();

function add(a, b) {
    // console.log(a+b);
    return a+b;
}

let x = 10;
let y = 20;

let addition = add(x, y);

// add(x, y);
// console.log(add(x, y));
console.log(addition);


let a = 5; // Global variable

function local() {
    let b = 3; // Local variable
    console.log(a);
}

local();


// Anonymous Function

// Haven't declare the name of the function
let fun = function() {
    console.log("Anonymous Function");
}

fun();


// Invoke Function 

(
    function() {
        console.log("Invoke Function");
    }
) ();


// Arrow Function

let b = (a, b) => {
    return a+b;
}

console.log(b(10, 15));

let d = (a, b) => console.log(a+b); // Arrow function simple format

d(5, 5);
