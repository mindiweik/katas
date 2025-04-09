import assert from 'assert'
import { findEvenIndex } from './findEvenIndex'

describe(findEvenIndex.name, () => {
  it('should return 3', () => {
    const actual = findEvenIndex([1, 2, 3, 4, 3, 2, 1])
    assert.deepStrictEqual(actual, 3)
  })

  it('should return 1', () => {
    const actual = findEvenIndex([1, 100, 50, -51, 1, 1])
    assert.deepStrictEqual(actual, 1)
  })

  it('should return -1', () => {
    const actual = findEvenIndex([1, 2, 3, 4, 5, 6])
    assert.deepStrictEqual(actual, -1)
  })

  it('should return 3', () => {
    const actual = findEvenIndex([20, 10, 30, 10, 10, 15, 35])
    assert.deepStrictEqual(actual, 3)
  })

  it('should return 0', () => {
    const actual = findEvenIndex([20, 10, -80, 10, 10, 15, 35])
    assert.deepStrictEqual(actual, 0)
  })

  it('should return 6', () => {
    const actual = findEvenIndex([10, -80, 10, 10, 15, 35, 20])
    assert.deepStrictEqual(actual, 6)
  })

  it('should return -1', () => {
    const actual = findEvenIndex([8, 8])
    assert.deepStrictEqual(actual, -1)
  })

  it('should return 0', () => {
    const actual = findEvenIndex([8, 0])
    assert.deepStrictEqual(actual, 0)
  })

  it('should return 1', () => {
    const actual = findEvenIndex([0, 8])
    assert.deepStrictEqual(actual, 1)
  })

  it('should return 0', () => {
    const actual = findEvenIndex([7, 3, -3])
    assert.deepStrictEqual(actual, 0)
  })

  it('should return 0', () => {
    const actual = findEvenIndex([8])
    assert.deepStrictEqual(actual, 0)
  })

  it('should return 0', () => {
    const actual = findEvenIndex([0, 0, 0, 0, 0])
    assert.deepStrictEqual(actual, 0)
  })

  it('should return 2', () => {
    const actual = findEvenIndex([-1, 1, 0, -1, 1, 0, -1, 1, 0, 0])
    assert.deepStrictEqual(actual, 2)
  })
})
