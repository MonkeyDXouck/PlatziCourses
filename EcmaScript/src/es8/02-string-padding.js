let stringExample = "Metal Gear"

console.log(stringExample.padStart(15, "-"))
console.log(stringExample.padEnd(15, "-"))

stringExample = ` ${stringExample} `.padStart(17, "-").padEnd(22, "-")

console.log(stringExample)