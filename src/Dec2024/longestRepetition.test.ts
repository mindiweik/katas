import assert from 'assert'
import { longestRepetition } from './longestRepetition'

const test1 = 'aaaabb' // ['a', 4]
const test2 = 'bbbaaabaaaa' // ['a', 4]
const test3 = 'cbdeuuu900' // ['u', 3]
const test4 = 'abbbbb' // ['b', 5]
const test5 = 'aabb' // ['a', 2]
const test6 = 'ba' // ['b', 1]
const test7 = '' // ['', 0]

describe(longestRepetition.name, () => {
  it('should return with ["a", 4]', () => {
    assert.deepStrictEqual(longestRepetition(test1), ['a', 4])
  })

  it('should return with ["a", 4]', () => {
    assert.deepStrictEqual(longestRepetition(test2), ['a', 4])
  })

  it('should return with ["u", 3]', () => {
    assert.deepStrictEqual(longestRepetition(test3), ['u', 3])
  })

  it('should return with ["b", 5]', () => {
    assert.deepStrictEqual(longestRepetition(test4), ['b', 5])
  })

  it('should return with ["a", 2]', () => {
    assert.deepStrictEqual(longestRepetition(test5), ['a', 2])
  })

  it('should return with ["b", 1]', () => {
    assert.deepStrictEqual(longestRepetition(test6), ['b', 1])
  })

  it('should return with ["", 0]', () => {
    assert.deepStrictEqual(longestRepetition(test7), ['', 0])
  })
})
