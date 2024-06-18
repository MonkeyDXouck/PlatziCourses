// flat
const array = [1,2,3,4,[5,6,7,[8,9,10,[11,12]]]]
// recursively concatenates sub-arrays. Default 1 level
console.log(array.flat()) // [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9, 10, [ 11, 12 ] ] ]
// x level
console.log(array.flat(2)) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [ 11, 12 ] ]
// all levels
console.log(array.flat(Infinity)) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

// flatMap
const array2 = [1,2,3,4,5]
// maps each element of the array and then recursively concatenates sub-array of level 1
console.log(array2.flatMap(v => [v, v * 2])) // [ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10 ]