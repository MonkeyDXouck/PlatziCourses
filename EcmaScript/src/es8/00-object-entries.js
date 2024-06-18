const countries = { MX: "Mexico", CO: "Colombia", CL: "Chile", BR: "Brasil" }

console.log(Object.entries(countries))
// Object.entries return an array of the given object's own 
// enumerable string-keyed property key-value pairs.
for (const [key, value] of Object.entries(countries)) {
    console.log(`${key} - ${value}`)
}