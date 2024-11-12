'use strict';

// function outerFunction(x) {
//     let y = 10;

//     function innerFunction() {
//         console.log(x + y);
//     }
//     return innerFunction;
// }

// const closure = outerFunction(5);
// closure();

const outerFunction = (x) => {
    let y = 10;

    const innerFunction = () => {
        console.log(x+y);
    }
    return innerFunction;
}

const closure = outerFunction(5);
closure();