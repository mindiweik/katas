// function sumOfMinimums(arr) {
//   let sum = 0

//   arr.map(subArr => {
//     subArr.sort()
//     sum += subArr[0]
//   })

//   return sum
// }

// function sumOfMinimums(arr) {
//   return arr.reduce(((acc, curr)=>  acc + curr.sort((a, b) => a - b)[0] ), 0)
// }

function sumOfMinimums(arr) {
  return arr.reduce(((acc, curr)=>  acc + Math.min(...curr) ), 0)
}


const test1 = [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]] // 9)
const test2 = [[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]] // 76
const test3 = [[23, 69, 88, 64, 63, 139], [128, 41, 67, 43, 103, 27], [39, 54, 147, 83, 84, 65]] // 89

console.log(sumOfMinimums(test1))
console.log(sumOfMinimums(test2))
console.log(sumOfMinimums(test3))