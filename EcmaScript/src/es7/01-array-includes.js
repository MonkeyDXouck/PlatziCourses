const numbersArray = [1,2,3,4,45,6,7,65,8]

console.log(numbersArray.includes(65))

const namesArray = ["Carlos", "Oscar", "Juan", "Juja"]

console.log(namesArray.includes("Juja"), namesArray.includes("oscar"));

// "includes" options in objects by key

const letras = { a: 1, b: 2, c: 3 }

console.log("a" in letras)
console.log(letras.hasOwnProperty("A"))
console.log(Object.hasOwn(letras, "a"))