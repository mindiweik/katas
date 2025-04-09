import assert from 'assert'
import { driver } from './driver'

describe(driver.name, () => {
  it('should return SMITH001010JJ9AA', () => {
    const actual = driver(['John', 'James', 'Smith', '01-Jan-2000', 'M'])
    assert.deepStrictEqual(actual, 'SMITH001010JJ9AA')
  })

  it('should return GIBBS862131J99AA', () => {
    const actual = driver(['Johanna', '', 'Gibbs', '13-Dec-1981', 'F'])
    assert.deepStrictEqual(actual, 'GIBBS862131J99AA')
  })

  it('should return LEE99809021AR9AA', () => {
    const actual = driver(['Andrew', 'Robert', 'Lee', '02-September-1981', 'M'])
    assert.deepStrictEqual(actual, 'LEE99809021AR9AA')
  })

  it('should return GIBB9862131J99AA', () => {
    const actual = driver(['Johanna', '', 'Gibb', '13-Dec-1981', 'F'])
    assert.deepStrictEqual(actual, 'GIBB9862131J99AA')
  })
})
