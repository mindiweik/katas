import assert from 'assert'
import { multiplicationTable } from './multiplicationTable'

describe(multiplicationTable.name, () => {
  it('should return [[1]]', () => {
    const actual = multiplicationTable(1)
    assert.deepStrictEqual(actual, [[1]])
  })

  it('should return [[1, 2], [2, 4]]', () => {
    const actual = multiplicationTable(2)
    assert.deepStrictEqual(actual, [
      [1, 2],
      [2, 4],
    ])
  })

  it('should return [[1, 2, 3], [2, 4, 6], [3, 6, 9]]', () => {
    const actual = multiplicationTable(3)
    assert.deepStrictEqual(actual, [
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9],
    ])
  })
})
