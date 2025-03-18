/**
 * This solution works, but is a naive solution:
 */

export const upArray = (arr: number[]): number[] | null => {
  if (arr.length === 0) {
    return null
  }

  const isValid = isValidArr(arr)
  if (!isValid) {
    return null
  }

  const addDigitToArr = addOneToLastDigit(arr)
  return carryOver(addDigitToArr)
}

const isValidArr = (arr: number[]): boolean => {
  for (const digit of arr) {
    if (digit < 0 || digit >= 10) {
      return false
    }
  }

  return true
}

const addOneToLastDigit = (arr: number[]): number[] => {
  arr[arr.length - 1]++
  return arr
}

const carryOver = (arr: number[]): number[] => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 10) {
      arr[i] = 0
      if (i === 0) {
        arr.unshift(1)
      } else {
        arr[i - 1]++
      }
    }
  }

  return arr
}

/**
 * Refactored:
 */

/**
 * Notes:
 */
