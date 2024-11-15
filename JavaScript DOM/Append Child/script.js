'use strict';


// appendChild

// const ul = document.querySelector('ul');
// add new child in "ul" with JavaScript
const newE = document.createElement('li');
newE.textContent = "Shurti Kasana";
ul.appendChild(newE);


// remove child in "ul" with JavaScript
const ul = document.querySelector('li'); // remove first element
ul.remove(); // It will remove complete "ul" elements

console.log(ul);