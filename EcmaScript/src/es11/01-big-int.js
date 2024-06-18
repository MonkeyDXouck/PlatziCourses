console.log(Number.MAX_SAFE_INTEGER) // limit number max
console.log(Number.MIN_SAFE_INTEGER)  // limit number min


const increment = 2
const number = Number.MAX_SAFE_INTEGER + increment
const bigInt = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(increment)


console.log(number)
console.log(bigInt)