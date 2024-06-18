const promiseFn = () => {
    return new Promise((resolve, reject) => {
        true ? setTimeout(() => resolve("*He arrived*"), 2000) : reject(new Error("Error!"))
    })
}

const asyncFn = async () => {
    console.log("No, he's on his way")
    console.log(await promiseFn())
    console.log("Thanks for coffee")
}

console.log("Hi, is Sam here?")
asyncFn()
console.log("Would you like a coffee while you wait? -Yeah")