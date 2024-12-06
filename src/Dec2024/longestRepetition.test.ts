import assert from 'assert'
import { longestRepetition } from "./longestRepetition"

const test1 = 'aaaabb' // ['a', 4]
const test2 = 'bbbaaabaaaa' // ['a', 4]
const test3 = 'cbdeuuu900' // ['u', 3]
const test4 = 'abbbbb' // ['b', 5]
const test5 = 'aabb' // ['a', 2]
const test6 = 'ba' // ['b', 1]
const test7 = '' // ['', 0]

describe(longestRepetition.name, () => {
	it('should work with test cases', () => {
		assert.deepStrictEqual(longestRepetition(test1), ['a', 4], `Should return ['a', 4], got ${longestRepetition(test1)}`)
		assert.deepStrictEqual(longestRepetition(test2), ['a', 4], `Should return ['a', 4], got ${longestRepetition(test2)}`)
		assert.deepStrictEqual(longestRepetition(test3), ['u', 3], `Should return ['u', 3], got ${longestRepetition(test3)}`)
		assert.deepStrictEqual(longestRepetition(test4), ['b', 5], `Should return ['b', 5], got ${longestRepetition(test4)}`)
		assert.deepStrictEqual(longestRepetition(test5), ['a', 2], `Should return ['a', 2], got ${longestRepetition(test5)}`)
		assert.deepStrictEqual(longestRepetition(test6), ['b', 1], `Should return ['b', 1], got ${longestRepetition(test6)}`)
		assert.deepStrictEqual(longestRepetition(test7), ['', 0], `Should return ['', 0], got ${longestRepetition(test7)}`)
	})
})