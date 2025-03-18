import assert from 'assert'
import { multiplesOf3Or5 } from './multiplesOf3Or5'

describe(multiplesOf3Or5.name, () => {
  it('should return 23', () => {
    const actual = multiplesOf3Or5(10)
    assert.deepStrictEqual(actual, 23)
  })

  it('should return 143', () => {
    const actual = multiplesOf3Or5(25)
    assert.deepStrictEqual(actual, 143)
  })

  it('should return 0 for a negative input', () => {
    const actual = multiplesOf3Or5(-5)
    assert.deepStrictEqual(actual, 0)
  })
})
