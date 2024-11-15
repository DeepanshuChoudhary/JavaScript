'use strict';

// replaceChild

const list = document.querySelector('ul');

const childToChange = list.children[3];

const newLi = document.createElement('li');
newLi.textContent = "Anshu Choudhary" ;

list.replaceChild(newLi, childToChange);