"use strict";

var target = document.querySelector('.hero');

var newE = '<b>Drop x oUT</b>';

// target.insertAdjacentHTML("beforebegin", newE);

// target.insertAdjacentHTML("beforeend", newE);

// target.insertAdjacentHTML("afterend", newE);

target.insertAdjacentHTML("afterbegin", newE);