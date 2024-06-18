const countries = { MX: "Mexico", CO: "Colombia", CL: "Chile", BR: "Brasil" }

console.log(Object.values(countries))
// Object.values return an array containing the given object's own 
// enumerable string-keyed property values.
console.log(`Registered countries: `)
for (const iterate of Object.values(countries)) {
    console.log(`- ${iterate}`)
}