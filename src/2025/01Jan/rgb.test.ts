import assert from 'assert'
import { rgb } from './rgb'

describe(rgb.name, () => {
	it('should return "FFFFFF"', () => {
		const actual = rgb(255, 255, 255)
		assert.deepStrictEqual(actual, 'FFFFFF', `Expected ${actual} to equal FFFFFF`)
	})

	it('should return "FFFFFF"', () => {
    const actual = rgb(255, 255, 300)
    assert.deepStrictEqual(actual, 'FFFFFF', `Expected ${actual} to equal FFFFFF`)
	})
	
	it('should return "000000"', () => {
		const actual = rgb(0, 0, 0)
		assert.deepStrictEqual(actual, '000000', `Expected ${actual} to equal 000000`)
	})

	it('should return "000000"', () => {
		const actual = rgb(0, 0, -20)
		assert.deepStrictEqual(actual, '000000', `Expected ${actual} to equal 000000`)
	})

	it('should return 9400D3"', () => {
		const actual = rgb(148, 0, 211)
		assert.deepStrictEqual(actual, '9400D3', `Expected ${actual} to equal 9400D3`)
	})

	it('should return "ADFF2F"', () => {
		const actual = rgb(173, 255, 47)
		assert.deepStrictEqual(actual, 'ADFF2F', `Expected ${actual} to equal ADFF2F`)
	})
})