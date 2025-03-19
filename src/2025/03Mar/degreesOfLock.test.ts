import assert from 'assert'
import { degreesOfLock } from './degreesOfLock'

describe(degreesOfLock.name, () => {
  it('should return 1350', () => {
    const actual = degreesOfLock(0, 30, 0, 30)
    assert.deepStrictEqual(actual, 1350)
  })

  it('should return 1350', () => {
    const actual = degreesOfLock(5, 35, 5, 35)
    assert.deepStrictEqual(actual, 1350)
  })

  it('should return 1620', () => {
    const actual = degreesOfLock(0, 20, 0, 20)
    assert.deepStrictEqual(actual, 1620)
  })

  it('should return 1620', () => {
    const actual = degreesOfLock(7, 27, 7, 27)
    assert.deepStrictEqual(actual, 1620)
  })

  it('should return 1890', () => {
    const actual = degreesOfLock(0, 10, 0, 10)
    assert.deepStrictEqual(actual, 1890)
  })

  it('should return 1890', () => {
    const actual = degreesOfLock(9, 19, 9, 19)
    assert.deepStrictEqual(actual, 1890)
  })

  it('should return 1377', () => {
    const actual = degreesOfLock(5, 30, 39, 30)
    assert.deepStrictEqual(actual, 1377)
  })

  it('should return 1530', () => {
    const actual = degreesOfLock(4, 24, 36, 18)
    assert.deepStrictEqual(actual, 1530)
  })
})
