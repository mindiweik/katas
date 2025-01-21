import assert from 'assert'
import { temps } from './temps'

describe(temps.name, () => {
	it('should describe the expected result', () => {
		const actual = 'actual'
		assert.deepStrictEqual(actual, 'actual')
	})
})