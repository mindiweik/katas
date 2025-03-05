import assert from 'assert'
import { decipherThis } from './decipherThis'

describe(decipherThis.name, () => {
  const expected1 = 'Hello good day'
  it(`should return ${expected1}`, () => {
    const actual = decipherThis('72olle 103doo 100ya')
    assert.deepStrictEqual(actual, expected1, `Expected ${expected1} but got ${actual}`)
  })

  const expected2 = 'Ready set go'
  it(`should return ${expected2}`, () => {
    const actual = decipherThis('82yade 115te 103o')
    assert.deepStrictEqual(actual, expected2, `Expected ${expected2} but got ${actual}`)
  })

  const expected3 = 'Have a go at this and see how you do'
  it(`should return ${expected3}`, () => {
    const actual = decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')
    assert.deepStrictEqual(actual, expected3, `Expected ${expected3} but got ${actual}`)
  })
})
