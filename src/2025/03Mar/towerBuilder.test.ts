import assert from 'assert'
import { towerBuilder } from './towerBuilder'

describe(towerBuilder.name, () => {
  it("should return a tower that looks like: \"[ '    **    ', '    **    ', '    **    ', '  ******  ', '  ******  ', '  ******  ', '**********', '**********', '**********' ]\"", () => {
    const actual = JSON.stringify(towerBuilder(3, [2, 3]))
    assert.deepStrictEqual(
      actual,
      JSON.stringify([
        '    **    ',
        '    **    ',
        '    **    ',
        '  ******  ',
        '  ******  ',
        '  ******  ',
        '**********',
        '**********',
        '**********',
      ]),
    )
  })

  it('should return a tower that looks like: "[ \'*\' ]"', () => {
    const actual = JSON.stringify(towerBuilder(1, [1, 1]))
    assert.deepStrictEqual(actual, JSON.stringify(['*']))
  })

  it("should return a tower that looks like: \"[ '        ****        ', '        ****        ', '    ************    ', '    ************    ', '********************', '********************' ]\"", () => {
    const actual = JSON.stringify(towerBuilder(3, [4, 2]))
    assert.deepStrictEqual(
      actual,
      JSON.stringify([
        '        ****        ',
        '        ****        ',
        '    ************    ',
        '    ************    ',
        '********************',
        '********************',
      ]),
    )
  })
})
