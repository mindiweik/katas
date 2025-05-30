import assert from 'assert'
import { decrypt, encrypt } from './encrypt2'

describe(encrypt.name, () => {
  it('should return "$-Wy,dM79H\'i\'o$n0C&I.ZTcMJw5vPlZc Hn!krhlaa:khV mkL;gvtP-S7Rt1Vp2RV:wV9VuhO Iz3dqb.U0w"', () => {
    const actual = encrypt(
      'Do the kata "Kobayashi-Maru-Test!" Endless fun and excitement when finding a solution!',
    )
    assert.deepStrictEqual(
      actual,
      "$-Wy,dM79H'i'o$n0C&I.ZTcMJw5vPlZc Hn!krhlaa:khV mkL;gvtP-S7Rt1Vp2RV:wV9VuhO Iz3dqb.U0w",
    )
  })

  it('should return "5MyQa9p0riYplZc"', () => {
    const actual = encrypt('This is a test!')
    assert.deepStrictEqual(actual, '5MyQa9p0riYplZc')
  })

  it('should return "5MyQa79H\'ijQaw!Ns6jVtpmnlZ.V6p"', () => {
    const actual = encrypt('This kata is very interesting!')
    assert.deepStrictEqual(actual, "5MyQa79H'ijQaw!Ns6jVtpmnlZ.V6p")
  })

  it('should return "" for an empty string', () => {
    const actual = encrypt('')
    assert.deepStrictEqual(actual, '')
  })
})

describe(decrypt.name, () => {
  it('should return "Do the kata \\"Kobayashi-Maru-Test!\\" Endless fun and excitement when finding a solution!"', () => {
    const actual = decrypt(
      "$-Wy,dM79H'i'o$n0C&I.ZTcMJw5vPlZc Hn!krhlaa:khV mkL;gvtP-S7Rt1Vp2RV:wV9VuhO Iz3dqb.U0w",
    )
    assert.deepStrictEqual(
      actual,
      'Do the kata "Kobayashi-Maru-Test!" Endless fun and excitement when finding a solution!',
    )
  })

  it('should return "This is a test!"', () => {
    const actual = decrypt('5MyQa9p0riYplZc')
    assert.deepStrictEqual(actual, 'This is a test!')
  })

  it('should return "This kata is very interesting!"', () => {
    const actual = decrypt("5MyQa79H'ijQaw!Ns6jVtpmnlZ.V6p")
    assert.deepStrictEqual(actual, 'This kata is very interesting!')
  })

  it('should return "" for an empty string', () => {
    const actual = decrypt('')
    assert.deepStrictEqual(actual, '')
  })
})
