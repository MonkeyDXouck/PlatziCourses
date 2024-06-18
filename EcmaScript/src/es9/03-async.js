async function* generator() {
    yield Promise.resolve(1)
    yield Promise.resolve(2)
    yield Promise.resolve(3)
}

const rep = generator()

rep.next().then(response => console.log(response.value))
rep.next().then(response => console.log(response.value))
console.log("Hi")
rep.next().then(response => console.log(response.value))

async function namesArray(array) {
    for await (let value of array) {
        console.log(value)
    }
}

const names = namesArray(["Link", "Zelda", "Navi", "Ganondorf"])
console.log("After")