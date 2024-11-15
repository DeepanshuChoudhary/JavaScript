'use strict';


// parentElement

// var parent = document.querySelector('li');
// var par = parent.parentElement;
// console.log(par); // it select <ul> the parent-element of <li>


// previousElementSibling

// var parent = document.querySelector('div');
// var par = parent.parentElement;
// console.log(par); // it select the previous-element of <div> that is <body>


// children

var child = document.querySelector('ul');
var c = child.children;
// console.log(c);
console.log(c[0]);


// childNodes[nodeNumber]

var child = document.querySelector('ul');
var c = child.childNodes;
// console.log(child.childNodes);
console.log(child.childNodes[1]);