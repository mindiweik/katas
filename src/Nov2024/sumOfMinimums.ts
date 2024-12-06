// function sumOfMinimums(arr) {
//   let sum = 0

//   arr.forEach(subArr => {
//     subArr.sort()
//     sum += subArr[0]
//   })

//   return sum
// }

// function sumOfMinimums(arr) {
//   return arr.reduce(((acc, curr)=>  acc + curr.sort((a, b) => a - b)[0] ), 0)
// }

export const sumOfMinimums = (arr: number[][]) => {
  return arr.reduce((acc, curr) => acc + Math.min(...curr), 0)
}

/**
 * I came across this option for the edge case and I like it better. It's simpler and cleaner.
 *   if (!text) return ['', 0];
 *
 */
