let hero = document.querySelector('#hero');

console.log(hero.getAttribute('about'));
console.log(hero.getAttribute('id'));

// set new attribute like 'about'
hero.setAttribute("example", 123);
console.log(hero.outerHTML);

console.log("------------");

for(let attr of hero.attributes) {
    // console.log(attr);    
    // console.log(attr.name);    
    // console.log(attr.value);
    
    console.log(`${attr.name} = ${attr.value}`);
}