import assert from 'assert'
import { scoobydoo, villains } from './scoobydoo'

describe(scoobydoo.name, () => {
  it('should locate "Medicines Man"', () => {
    const actual = scoobydoo('ndcddzmiahsz', villains)
    assert.deepStrictEqual(actual, 'Medicines Man')
  })

  it('should locate "Skeletons Men"', () => {
    const actual = scoobydoo('ooegefsiehsi', villains)
    assert.deepStrictEqual(actual, 'Skeletons Men')
  })

  it('should locate "Witch Doctors"', () => {
    const actual = scoobydoo('oyhxtdwnrjtx', villains)
    assert.deepStrictEqual(actual, 'Witch Doctors')
  })
})
