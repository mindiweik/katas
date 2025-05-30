import assert from 'assert'
import { grabscrab } from './grabscrab'

describe(grabscrab.name, () => {
  it('should return ["first"]', () => {
    const actual = grabscrab('trisf', ['first'])
    assert.deepStrictEqual(actual, ['first'], "Should have found 'first'")
  })

  it('should return []', () => {
    const actual = grabscrab('oob', ['bob', 'baobab'])
    assert.deepStrictEqual(actual, [], 'Should not have found anything')
  })

  it('should return ["mountains"]', () => {
    const actual = grabscrab('ainstuomn', ['mountains', 'hills', 'mesa'])
    assert.deepStrictEqual(actual, ['mountains'], "Should have found 'mountains'")
  })

  it('should return ["pool", "loop"]', () => {
    const actual = grabscrab('oolp', ['donkey', 'pool', 'horse', 'loop'])
    assert.deepStrictEqual(actual, ['pool', 'loop'], "Should have found 'pool' and 'loop'")
  })

  it('should return ["sport", "ports"]', () => {
    const actual = grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey'])
    assert.deepStrictEqual(actual, ['sport', 'ports'], "Should have found 'sport' and 'ports'")
  })

  it('should return []', () => {
    const actual = grabscrab('ourf', ['one', 'two', 'three'])
    assert.deepStrictEqual(actual, [], 'Should not have found anything')
  })
})
