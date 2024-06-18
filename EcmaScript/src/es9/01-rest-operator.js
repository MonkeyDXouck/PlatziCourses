// Rest property operator
const user = { username: "Xouck", age: "80", country: "CO" }

const { username, ...values } = user

console.log(username)
console.log(values)