const entries = new Map([["name", "Joe"], ["age", 34]])
console.log(entries)
console.log(Object.fromEntries(entries))

// remember of array of arrays to object
const inv = { name: "Joe", age: 34 }
console.log(Object.entries(inv))