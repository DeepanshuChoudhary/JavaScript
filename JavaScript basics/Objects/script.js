'use strict';

let obj = {
    name: "Deepanshu",
    "age": 25,
    // last name: "Choudhary" - Error because of space in name
    "Last name": "Choudhary",

    fun: function() {
        console.log("I am fUNCTION");
    },
    arr: [20, 30, 40]
}


// console.log(obj);

// console.log(obj.name);

// console.log(obj["name"]);

// console.log(obj["Last name"]);

// obj.fun();

// console.log(obj.arr);

// Put the item in the "obj"

// obj.key="item";

// let a = "key2";

// obj[a] = "Key2 item";

// console.log(obj);

// for(let i in obj) {
//     console.log(obj[i]);
// }


for(let i of Object.keys(obj)) {
    // console.log(i);
    console.log(obj[i]);
}