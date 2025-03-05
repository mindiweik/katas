import assert from 'assert'
import { rot13 } from './rot13'

describe(rot13.name, () => {
  it('should return "ROT13 example."', () => {
    const actual = rot13('EBG13 rknzcyr.')
    assert.deepStrictEqual(actual, 'ROT13 example.')
  })

  it('should return "This is my first ROT13 exercise!"', () => {
    const actual = rot13('Guvf vf zl svefg EBG13 rkrepvfr!')
    assert.deepStrictEqual(actual, 'This is my first ROT13 exercise!')
  })
})
