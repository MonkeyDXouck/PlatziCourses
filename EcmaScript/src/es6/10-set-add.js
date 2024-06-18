const list = new Set()

for (let i = 0; i < 4; i++) {
    list.add(`Item ${i}`)
}

console.log(list)

// Remove repeated numbers

const numbers = [1,2,3,3,4,5,6,6,9,9,6,32,5,3,7,8];

console.log([...new Set(numbers)])