import assert from 'assert'
import { findTheNotFittingElement } from './findTheNotFittingElement'

describe(findTheNotFittingElement.name, () => {
  it('should return 1', () => {
    const actual = findTheNotFittingElement([1, 2, 2, 2, 2])
    assert.deepStrictEqual(actual, 1)
  })

  it('should return false', () => {
    const actual = findTheNotFittingElement([true, true, true, false, true])
    assert.deepStrictEqual(actual, false)
  })

  it('should return "b"', () => {
    const actual = findTheNotFittingElement(['a', 'a', 'b', 'a', 'a', 'a', 'a'])
    assert.deepStrictEqual(actual, 'b')
  })

  it('should return 2', () => {
    const actual = findTheNotFittingElement(['1', 2, '4', '6', '8'])
    assert.deepStrictEqual(actual, 2)
  })

  it('should return "2"', () => {
    const actual = findTheNotFittingElement([2, 2, 2, 2, 2, '2'])
    assert.deepStrictEqual(actual, '2')
  })

  it('should return true', () => {
    const actual = findTheNotFittingElement([1, 2, 4, 6, true])
    assert.deepStrictEqual(actual, true)
  })

  it('should return 1', () => {
    const actual = findTheNotFittingElement([1, 2, 4, 6, 10])
    assert.deepStrictEqual(actual, 1)
  })

  it('should return -2', () => {
    const actual = findTheNotFittingElement([2, 2, -2, 6, 10])
    assert.deepStrictEqual(actual, -2)
  })

  it('should return "t"', () => {
    const actual = findTheNotFittingElement(['Z', 'L', 'P', 't', 'G'])
    assert.deepStrictEqual(actual, 't')
  })

  it('should return "3"', () => {
    const actual = findTheNotFittingElement(['Z', 'L', '3', 't', 'G'])
    assert.deepStrictEqual(actual, '3')
  })

  it('should return 4', () => {
    const actual = findTheNotFittingElement(['Z', 'L', '3', 't', 4])
    assert.deepStrictEqual(actual, 4)
  })

  it('should return "."', () => {
    const actual = findTheNotFittingElement(['Z', 'e', '.', 'a', 'G'])
    assert.deepStrictEqual(actual, '.')
  })

  it('should return 5', () => {
    const actual = findTheNotFittingElement([2, 4, 5, 6, 10])
    assert.deepStrictEqual(actual, 5)
  })
})
