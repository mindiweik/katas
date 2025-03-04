import assert from 'assert'
import { score } from './score'

describe(score.name, () => {
  it('should return 0', () => {
    const actual = score([2, 3, 4, 6, 2])
    assert.deepStrictEqual(actual, 0, `Answer should be 0, received ${actual}`)
  })

  it('should return 400', () => {
    const actual = score([4, 4, 4, 3, 3])
    assert.deepStrictEqual(actual, 400, `Answer should be 400, received ${actual}`)
  })

  it('should return 450', () => {
    const actual = score([2, 4, 4, 5, 4])
    assert.deepStrictEqual(actual, 450, `Answer should be 450, received ${actual}`)
  })
})
