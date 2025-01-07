import assert from 'assert'
import { hammingDistance } from './hammingDistance'

describe(hammingDistance.name, () => {
  it('should return 0', () => {
    const actual = hammingDistance('', '')
    assert.deepStrictEqual(actual, 0, `expected 0, received ${actual}`)
	})
	
	it('should return 3', () => {
		const actual = hammingDistance('I like turtles', 'I like turkeys')
		assert.deepStrictEqual(actual, 3, `expected 3, received ${actual}`)
	})

	it('should return 0', () => {
		const actual = hammingDistance('Hello World', 'Hello World')
		assert.deepStrictEqual(actual, 0, `expected 0, received ${actual}`)
	})

	it('should return 3', () => {
		const actual = hammingDistance('a man a plan a canal', 'a man a plan sobanal')
		assert.deepStrictEqual(actual, 3, `expected 3, received ${actual}`)
	})

	it('should return 2', () => {
		const actual = hammingDistance('hamming and cheese', 'Hamming and Cheese')
		assert.deepStrictEqual(actual, 2, `expected 2, received ${actual}`)
	})

	it('should return 2', () => {
		const actual = hammingDistance('espresso', 'Expresso')
		assert.deepStrictEqual(actual, 2, `expected 2, received ${actual}`)
	})

	it('should return 24', () => {
		const actual = hammingDistance('old father, old artificer', 'of my soul the uncreated ')
		assert.deepStrictEqual(actual, 24, `expected 24, received ${actual}`)
	})
})
