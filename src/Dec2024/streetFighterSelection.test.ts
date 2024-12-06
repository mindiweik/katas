import assert from 'assert'
import { streetFighterSelection } from './streetFighterSelection'

const fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
]
type Move = 'down' | 'up' | 'right' | 'left'
let moves: Move[] = []

describe(streetFighterSelection.name, function () {
  it('should work with few moves', function () {
    moves = ['up', 'left', 'right', 'left', 'left']
    const actual = streetFighterSelection(fighters, [0, 0], moves)
    assert.deepStrictEqual(
      actual,
      ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog'],
      `Test 1 - Should return correct fighters, got ${actual}`,
    )
  })

  it('should work with no selection cursor moves', function () {
    moves = []
    const actual = streetFighterSelection(fighters, [0, 0], moves)
    assert.deepStrictEqual(actual, [], `Test 2 - Should return correct fighters, got ${actual}`)
  })

  it('should work when always moving left', function () {
    moves = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left']
    const actual = streetFighterSelection(fighters, [0, 0], moves)
    assert.deepStrictEqual(
      actual,
      ['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog'],
      `Test 3 - Should return correct fighters, got ${actual}`,
    )
  })

  it('should work when always moving right', function () {
    moves = ['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']
    const actual = streetFighterSelection(fighters, [0, 0], moves)
    assert.deepStrictEqual(
      actual,
      ['E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ryu', 'E.Honda', 'Blanka'],
      `Test 4 - Should return correct fighters, got ${actual}`,
    )
  })

  it('should use all 4 directions clockwise twice', function () {
    moves = ['up', 'left', 'down', 'right', 'up', 'left', 'down', 'right']
    const actual = streetFighterSelection(fighters, [0, 0], moves)
    assert.deepStrictEqual(
      actual,
      ['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken'],
      `Test 5 - Should return correct fighters, got ${actual}`,
    )
  })

  it('should work when always moving down', function () {
    moves = ['down', 'down', 'down', 'down']
    const actual = streetFighterSelection(fighters, [0, 0], moves)
    assert.deepStrictEqual(
      actual,
      ['Ken', 'Ken', 'Ken', 'Ken'],
      `Test 6 - Should return correct fighters, got ${actual}`,
    )
  })

  it('should work when always moving up', function () {
    moves = ['up', 'up', 'up', 'up']
    const actual = streetFighterSelection(fighters, [0, 0], moves)
    assert.deepStrictEqual(
      actual,
      ['Ryu', 'Ryu', 'Ryu', 'Ryu'],
      `Test 7 - Should return correct fighters, got ${actual}`,
    )
  })
})
