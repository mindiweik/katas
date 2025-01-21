import assert from 'assert'
import { score } from './score'

describe(score.name, () => {
	it('should describe the expected result', () => {
		const actual = 'actual'
		assert.deepStrictEqual(actual, 'actual')
	})
})