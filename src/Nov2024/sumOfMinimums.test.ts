import assert from 'assert'
import { sumOfMinimums } from './sumOfMinimums'

const test1 = [
  [7, 9, 8, 6, 2],
  [6, 3, 5, 4, 3],
  [5, 8, 7, 4, 5],
]
const test2 = [
  [11, 12, 14, 54],
  [67, 89, 90, 56],
  [7, 9, 4, 3],
  [9, 8, 6, 7],
]
const test3 = [
  [23, 69, 88, 64, 63, 139],
  [128, 41, 67, 43, 103, 27],
  [39, 54, 147, 83, 84, 65],
]

describe(sumOfMinimums.name, () => {
  it('should return with 9', () => {
    assert.deepStrictEqual(sumOfMinimums(test1), 9)
  })

  it('should return with 76', () => {
    assert.deepStrictEqual(sumOfMinimums(test2), 76)
  })

  it('should return with 89', () => {
    assert.deepStrictEqual(sumOfMinimums(test3), 89)
  })
})
