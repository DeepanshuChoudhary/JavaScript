'use strict';


// previousElementSibling

var a = document.querySelectorAll('.hero');

// if(a.previousElementSibling == null) {
//     console.log("Sibling not present");
// } else {
//     console.log(a.previousElementSibling);
// }

// console.log(document.querySelector('.hero').previousElementSibling);
// console.log(document.querySelector('.hero').previousElementSibling.previousElementSibling);

a.forEach((element) => 
    console.log(element.previousElementSibling)
)