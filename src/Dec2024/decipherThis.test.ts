import assert from 'assert'
import { decipherThis } from './decipherThis'

describe(decipherThis.name, () => {
  it('should describe the expected result', () => {
    const actual = 'actual'
    assert.deepStrictEqual(actual, 'actual')
  })
})
