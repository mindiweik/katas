import assert from 'assert'
import { fish } from './fish'

describe(fish.name, () => {
  it('should return fish of size 1', () => {
    const actual = fish('')
    assert.deepStrictEqual(actual, 1)
  })

  it('should return fish of size 1', () => {
    const actual = fish('0')
    assert.deepStrictEqual(actual, 1)
  })

  it('should return fish of size 1', () => {
    const actual = fish('6')
    assert.deepStrictEqual(actual, 1)
  })

  it('should return fish of size 2', () => {
    const actual = fish('1111')
    assert.deepStrictEqual(actual, 2)
  })

  it('should return fish of size 3', () => {
    const actual = fish('11112222')
    assert.deepStrictEqual(actual, 3)
  })

  it('should return fish of size 4', () => {
    const actual = fish('111122223333')
    assert.deepStrictEqual(actual, 4)
  })

  it('should return fish of size 3', () => {
    const actual = fish('111111111111')
    assert.deepStrictEqual(actual, 3)
  })

  it('should return fish of size 5', () => {
    const actual = fish('111111111111111111112222222222')
    assert.deepStrictEqual(actual, 5)
  })

  it('should return fish of size 5', () => {
    const actual = fish('151128241212192113722321331')
    assert.deepStrictEqual(actual, 5)
  })

  it('should return fish of size 5', () => {
    const actual = fish('151128241212192113722321331')
    assert.deepStrictEqual(actual, 5)
  })
})
