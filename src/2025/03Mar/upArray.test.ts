import assert from 'assert'
import { upArray } from './upArray'

describe(upArray.name, () => {
  describe('should return correct response for valid arrays', () => {
    it('should return [4, 3, 2, 6]', () => {
      const actual = upArray([4, 3, 2, 5])
      assert.deepStrictEqual(actual, [4, 3, 2, 6])
    })

    it('should return [2, 4, 0, 0]', () => {
      const actual = upArray([2, 3, 9, 9])
      assert.deepStrictEqual(actual, [2, 4, 0, 0])
    })

    it('should return [1, 0, 0]', () => {
      const actual = upArray([9, 9])
      assert.deepStrictEqual(actual, [1, 0, 0])
    })

    it('should return [0, 8]', () => {
      const actual = upArray([0, 7])
      assert.deepStrictEqual(actual, [0, 8])
    })

    it('should return [5, 7, 5', () => {
      const actual = upArray([5, 7, 4])
      assert.deepStrictEqual(actual, [5, 7, 5])
    })

    it('should return [1, 0, 0, 0]', () => {
      const actual = upArray([9, 9, 9])
      assert.deepStrictEqual(actual, [1, 0, 0, 0])
    })

    it('should return [2, 1, 4, 7, 4, 8, 3, 6, 4, 8]', () => {
      const actual = upArray([2, 1, 4, 7, 4, 8, 3, 6, 4, 7])
      assert.deepStrictEqual(actual, [2, 1, 4, 7, 4, 8, 3, 6, 4, 8])
    })
  })

  describe('should return null for invalid arrays', () => {
    it('should return null for [1, -9]', () => {
      const actual = upArray([1, -9])
      assert.deepStrictEqual(actual, null)
    })

    it('should return null for [1, 10]', () => {
      const actual = upArray([1, 10])
      assert.deepStrictEqual(actual, null)
    })

    it('should return null for []', () => {
      const actual = upArray([])
      assert.deepStrictEqual(actual, null)
    })

    it('should return null for [1, 2, 33]', () => {
      const actual = upArray([1, 2, 33])
      assert.deepStrictEqual(actual, null)
    })

    it('should return null for [1, 2, -1]', () => {
      const actual = upArray([1, 2, -1])
      assert.deepStrictEqual(actual, null)
    })
  })
})
