function* generator(array) {
    for (let value of array) {
        yield value
    }
}

const iterate = generator(["Gloria", "Jenny", "Nicol", "Camila"])

console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())

// Fibonacci sequence with generator

function* fibonacci() {
    yield 0
    yield 1
    
    let v1 = 0
    let v2 = 1
    
    while(true) {
      yield v1 + v2
      v2 = v1 + v2
      v1 = v2 - v1
    }
}

const iterateFb = fibonacci()
let i = 0
while(i < 6) {
    console.log(iterateFb.next())
    i++
}
