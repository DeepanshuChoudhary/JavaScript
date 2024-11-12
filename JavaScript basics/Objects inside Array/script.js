'use strict';

let obj_arr = [
    {user:1, name:"tate"},
    {user:2, name:"shelby"},
    {user:3, name:"chad"}
]

// for(let i of obj_arr) {
//     // console.log(i);
//     // console.log(i.user);
//     console.log(i.name);
// }

// let [item1, item2] = obj_arr;
// let [{name}, item2, item3] = obj_arr;
// let [{name}, item2, {name}] = obj_arr; // showing 'name' has already been declared
let [{name}, item2, {name:name1}] = obj_arr; // name:name1 here "name1" is just a name-variable actually they are targeting "chad"

console.log(name); // output: tate 
console.log(item2);
console.log(name1);