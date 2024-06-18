/** Arrays destructuring */
const numArray = [ 1, 2, 3, 4, 5 ];

// before es6
console.log(`${numArray[2]} ${numArray[1]} ${numArray[0]}`);

// es6
const [one, two, three ] = numArray;
console.log(`${three} ${two} ${one}`);

// and you can use the destructuring with the index and a name
const { 1: even } = numArray;
console.log(`even ${even}`);

/** Object destructuring */
const person = {
    name: "xouck",
    age: "54",
    country: "CO"
}

// before es6
console.log(person.name, person.age, person["country"]);

// es6
let { age, country } = person;
console.log(age, country);

// is possible change the variable name
let { age: newAge, country: newCountry } = person;
console.log(`Call values with new names: ${newAge} - ${newCountry}`);

/** Spread operator */

/** Arrays */
let team1 = [1, 2, 3];
let team2 = [4, 5, 6];

// a concatenation for arrays and objects in es6
console.log(["All participants", ...team1, ...team2]);

// copy an array using a reference in memory different thx the destructuring
let team2Copy = team2;
team2Copy[0] = 0;
console.log(`${team2} = ${team2Copy}`);

// es6
let team2CopyDestruc = [...team2];
team2CopyDestruc[0] = 1;
console.log(`${team2} != ${team2CopyDestruc}`);

/** Objects */
let user = { name: "Xocuk", age: 90 };
let color = "Blue";

let data = {id: 1, ...user, color};
console.log(data);

/** Rest */
const sum = (num, ...values) => {
    console.log(values);
    let [firstPosition] = values;
    return num + firstPosition;
}
console.log(sum(1,1,2,3,4));