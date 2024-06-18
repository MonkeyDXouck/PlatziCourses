/** var, let & const */

// firstly, the scope decides which variables you have access
// Scope local: you can access a variable only in part of the code, example a function
// Scope global: you can access a variable from any part of the code

// var: don't care the scope, can be re-declared and re-allocated

var animal = "Leon";
animal = "Cat";
console.log(animal);

// let: do care the scope, can't be re-declared but can be re-allocated

let fruit = "Apple";
fruit = "Peach";
console.log(fruit);

// const: do care the scope, can't be re-declared, nor re-allocated

const name = "Isabel";
try {
    name = "Luis";
} catch (error) {
    console.log("Nor re-allocated");
}

const fruits  = () => {
    if (true) {
        var fruit1 = "Apple"; // Function scope
        var fruit2 = "Kiwi"; // Block scope
        var fruit3 = "Peach"; // Block scope
    };
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
};