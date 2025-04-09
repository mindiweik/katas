/**
 * This solution works, but is a naive solution:
 */

const addEitherSide = (arr: number[]): number => {
  if (arr.length === 0) return 0
  return arr.reduce((acc, curr) => acc + curr, 0)
}

export function findEvenIndex(arr: number[]): number {
  for (let i = 0; i < arr.length; i++) {
    const leftArr = i === 0 ? [] : arr.slice(0, i)
    const rightArr = arr.slice(i + 1)

    const left = addEitherSide(leftArr)
    const right = addEitherSide(rightArr)

    if (left === right) return i
  }

  return -1
}

/**
 * Refactored:
 */

/**
 * Notes:
 */
