/**
 * This solution works, but is a naive solution:
 */

// const addEitherSide = (arr: number[]): number => {
//   if (arr.length === 0) return 0
//   return arr.reduce((acc, curr) => acc + curr, 0)
// }

// export function findEvenIndex(arr: number[]): number {
//   for (let i = 0; i < arr.length; i++) {
//     const leftArr = i === 0 ? [] : arr.slice(0, i)
//     const rightArr = arr.slice(i + 1)

//     const left = addEitherSide(leftArr)
//     const right = addEitherSide(rightArr)

//     if (left === right) return i
//   }

//   return -1
// }

/**
 * Refactored:
 */

// export function findEvenIndex(arr: number[]): number {
//   let left = 0
//   let right = arr.reduce((acc, curr) => acc + curr, 0)
//   right -= arr[0]

//   for (let i = 0; i < arr.length; i++) {
//     if (left === right) return i

//     left += arr[i]
//     right -= arr[i + 1]
//   }

//   return -1
// }

export function findEvenIndex(arr: number[]): number {
  let left = 0
  let right = arr.reduce((acc, curr) => acc + curr, 0)

  for (let i = 0; i < arr.length; i++) {
    right -= arr[i]
    if (left === right) return i

    left += arr[i]
  }

  return -1
}

/**
 * Notes:
 */
