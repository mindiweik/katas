import assert from 'assert'
import { towerBuilder } from './towerBuilder'

describe(towerBuilder.name, () => {
  it('should return ["*"]', () => {
    const actual = towerBuilder(1)
		assert.deepStrictEqual(actual, ['*'])
	})
	
	it('should return [" * ","***"]', () => {
		const actual = towerBuilder(2)
		assert.deepStrictEqual(actual, [' * ','***'])
	})

	it('should return ["  *  "," *** ","*****"]', () => {
		const actual = towerBuilder(3)
		assert.deepStrictEqual(actual, ['  *  ',' *** ','*****'])
	})
})
