// Added in es6 the "Template literals"
let hello = "hello";
let world = "world";

// Before es6
console.log(hello + " " + world + "!");

// es6
console.log(`${hello} ${world}!`);

// other aplication in Multi-line strings
// before es6
const lorem = "Anticipation has a habit to set you up \n"
+ "For disappointment in evening entertainment but..."
console.log(lorem)

// es6
const lorem2 = `Anticipation has a habit to set you up
For disappointment in evening entertainment but...`
console.log(lorem2)