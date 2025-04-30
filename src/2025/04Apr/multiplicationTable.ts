/**
 * This solution works, but is a naive solution:
 */

export function multiplicationTable(size: number): number[][] {
  const result = [[1]]

  for (let i = 1; i < size; i++) {
    result[0].push(i + 1)
    result.push([i + 1])
  }

  const firstRow = result[0]

  for (let row = 1; row < size; row++) {
    for (let col = 1; col < size; col++) {
      result[row][col] = firstRow[col] * result[row][0]
    }
  }

  return result
}

/**
 * Refactored:
 */

/**
 * Notes:
 */


